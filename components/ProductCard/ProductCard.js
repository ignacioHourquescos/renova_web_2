import { Card, Unavailable } from "./styles";

const ProductCard = ({ products }) => {
	return (
		<Card color={products.color}>
			<Card.Image
				imageUrl={products.urlImage}
				graduation={products.graduation}
				presentation={products.presentation}
			/>
			<Card.Information
				name={products.name}
				price={products.price}
				type={products.type}
				norms={products.norms}
			/>
			{products.active == "TRUE" ? <></> : <Unavailable />}
		</Card>
	);
};

export default ProductCard;
