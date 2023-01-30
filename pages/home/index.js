import Promotion from "./Sections/Promotion/Promotion";
import Product from "./Sections/Product/Product";
import Container from "./styles";
import Header from "../../components/Header/Header";

import { useEffect, useState } from "react";
import { get_prices } from "../api/renovapp/prices";
import { get_products_filters } from "../api/sheets/product_filters";
import { get_products_non_filters } from "../api/sheets/products_non_filters";

export default function Home() {
	const [promotions, setPromotions] = useState();
	const [products, setProducts] = useState(null);
	const [brands, setBrands] = useState(null);
	const [filters, setFilters] = useState(null);
	const [prices, setPrices] = useState();

	useEffect(() => {
		//aca tengo que hacer el fetch all, hacer el cambio para que buscque los articulos, y le inserte el precio.
		const fetch_all = async () => {
			const productPriceArray = await Promise.all([
				get_products_filters(),
				get_products_non_filters(),
				get_prices(),
			]);

			const consolidatedProductPrice = productPriceArray[0].map((element) => ({
				...element,
				price:
					productPriceArray[2].filter(
						(element2) => element2.id == element.code
					)[0]?.pr * 1.21,
			}));

			const consolidatedProductPrice_non_filter = productPriceArray[1].map(
				(element) => ({
					...element,
					price:
						productPriceArray[2].filter(
							(element2) => element2.id == element.code
						)[0]?.pr * 1.21,
				})
			);
			setFilters(consolidatedProductPrice);
			setProducts(consolidatedProductPrice_non_filter);
		};
		fetch_all();
	}, []);

	// prettier-ignore
	useEffect(() => {
  
		fetch(`/api/sheets/promotions`)
			.then((response) => response.json())
			.then((data) => {
				setPromotions(data);
			});
		console.log("🚀 ~ file: index.js:31 ~ .then ~ setPromotions", promotions);

		// fetch(`/api/sheets/products`)
		// 	.then((response) => response.json())
		// 	.then((data) => {setProducts(data);
		// 		const fetch_products = async () => {
		// 			const res = await get_products();
		// 			setPrices(res);
		// 		};
		// 		fetch_products();
		// 	})
    //   .then(()=>{
    //     // const priceFromERP = prices.find((element) => element.id == priceFromERP.code);
    //     // console.log("🚀 ~ file: index.js:39 ~ .then ~ priceFromERP",priceFromERP);
    //     console.log("🚀 ~ file: index.js:35 ~ products", products);
    //     console.log("🚀 ~ file: index.js:21 ~ rpices",prices);
    //   })

		 fetch(`/api/sheets/brands`)
		 	.then((response) => response.json())
		 	.then((data) => {
		 		setBrands(data);
		 	});
		// console.log("🚀 ~ file: index.js:49 ~ .then ~ setBrands", brands);
		// fetch(`/api/sheets/filters`)
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		setFilters(data);
		// 	});
		// console.log("🚀 ~ file: index.js:55 ~ .then ~ setFilters", filters);
	}, []);

	return (
		<Container>
			<Promotion promotions={promotions} />
			<Header>Filtros</Header>
			<Product type="filters" products={filters} />
			{brands?.map((brand) => (
				<>
					<Header>{brand}</Header>
					<Product
						type="oil"
						products={products?.filter((product) => product.brand === brand)}
					/>
				</>
			))}
		</Container>
	);
}
