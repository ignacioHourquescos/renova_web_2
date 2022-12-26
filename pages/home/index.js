import Promotion from "./Sections/Promotion/Promotion";
import Product from "./Sections/Product/Product";
import { Container, Header } from "./styles";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
	const [promotions, setPromotions] = useState();
	const [products, setProducts] = useState();
	const [brands, setBrands] = useState();

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
	}, []);

	return (
		<Container>
			<NavBar></NavBar>
			<Promotion promotions={promotions} />
			{brands?.map((brand) => (
				<>
					<Header>{brand}</Header>
					<Product
						products={products.filter((product) => product.brand === brand)}
					/>
				</>
			))}
		</Container>
	);
}
