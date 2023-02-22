import Card from "./components/index";
import { brandColorHandler } from "../../utils/brandColorFunction";

const ProductCardII = ({ products, type }) => {
	return (
		<>
			{products.active == true ? (
				<Card color={brandColorHandler(products.brand)}>
					<Card.Image
						imageUrl={products.imageUrl}
						graduation={products.graduation}
						type={products.type}
						brand={products.brand.toUpperCase()}
					/>
					<Card.Information
						title={products.title}
						price={products.price.toFixed()}
						type={products.type}
						code={products.id}
					/>
				</Card>
			) : (
				<>prodcuto no activo</>
			)}
		</>
	);
};

export default ProductCardII;
