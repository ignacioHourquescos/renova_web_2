import ProductCard from "../../../../components/ProductCard/ProductCard";
import ProductCardII from "../../../../components/ProductCardII/ProductCardII";
import Container from "./styles";

export default function Product({ products, type }) {
	return (
		<Container>
			{type == "oil"
				? products?.map((element, idx) => (
						<ProductCard key={idx} products={element} />
				  ))
				: products?.map((element, idx) => (
						<ProductCardII key={idx} products={element} />
				  ))}
		</Container>
	);
}
