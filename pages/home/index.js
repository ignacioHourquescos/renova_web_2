import Promotion from "./Sections/Promotion/Promotion";
import Product from "./Sections/Product/Product";
import Container from "./styles";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
	const [promotions, setPromotions] = useState();
	const [products, setProducts] = useState();

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
	}, []);

	return (
		<Container>
			<NavBar></NavBar>
			<Promotion promotions={promotions} />
			<Product products={products} />
		</Container>
	);
}
