import { Card } from "./components";
import { brandColorHandler } from "../../utils/brandColorFunction";

const ProductCard = ({ products, type }) => {
	return (
		<Card color={brandColorHandler(products.brand)}>
			<>
				<Card.Image
					imageUrl={products.imageUrl}
					graduation={products.graduation}
					presentation={products.presentation}
				/>
				<Card.Information
					name={products.name}
					price={products.price}
					type={products.type}
					norms={products.norms}
				/>
			</>
		</Card>
	);
};

export default ProductCard;
