import Promotion from "./Sections/Promotion/Promotion";
import Container from "./styles";
import { useEffect, useState } from "react";

export default function Home() {
	const [promotions, setPromotions] = useState();

	useEffect(() => {
		fetch(`/api/products`)
			.then((response) => response.json())
			.then((data) => {
				setPromotions(data);
				console.log("ACA LAS PORMOCIONES", data);
			});
	}, []);

	return (
		<Container>
			<Promotion dummyProduct={promotions} />
		</Container>
	);
}
