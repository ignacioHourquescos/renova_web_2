import { Card, Unavailable } from "./components/index";
import { brandColorHandler } from "../../utils/brandColorFunction";

const ProductCardII = ({ products, type }) => {
	return (
		<>
			{products.active == "TRUE" ? (
				<Card color={brandColorHandler(products.brand)}>
					<Card.Image
						imageUrl={products.imageUrl}
						graduation={products.graduation}
						type={products.type}
						brand={products.brand.toUpperCase()}
					/>
					<Card.Information
						name={products.name}
						price={products.price}
						type={products.type}
						code={products.code}
					/>
				</Card>
			) : (
				<></>
			)}
		</>
	);
};

export default ProductCardII;
