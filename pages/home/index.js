import Promotion from "./Sections/Promotion/Promotion";
import Product from "./Sections/Product/Product";
import { Container } from "./styles";
import Header from "../../components/Header/Header";

import { useEffect, useState } from "react";

export default function Home() {
	const [promotions, setPromotions] = useState();
	const [products, setProducts] = useState(null);
	const [brands, setBrands] = useState(null);
	const [filters, setFilters] = useState(null);

	useEffect(() => {
		fetch(`/api/promotions`)
			.then((response) => response.json())
			.then((data) => {
				setPromotions(data);
				console.log("ACA LAS PORMOCIONES", data);
			});
		fetch(`/api/products`)
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				console.log("ACA LAS PRODCUTOS", data);
			});
		fetch(`/api/brands`)
			.then((response) => response.json())
			.then((data) => {
				setBrands(data);
				console.log("ACA LAS MARCAS", data);
			});
		fetch(`/api/filters`)
			.then((response) => response.json())
			.then((data) => {
				setFilters(data);
				console.log("ACA LOS FILTROS", data);
			});
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
