import ProductCard from "../../../../components/ProductCard/ProductCard";
import Container from "./styles";

export default function Product({ products }) {
	return (
		<Container>
			{products?.map((element, idx) => (
				<ProductCard key={idx} products={element} />
			))}
		</Container>
	);
}
