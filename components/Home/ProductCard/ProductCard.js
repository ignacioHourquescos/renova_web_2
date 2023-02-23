import { Styled } from "./styles";
import Flex, { FlexItem } from "styled-flex-component";
// import { brandColorHandler } from "../../utils/brandColorFunction";

const ProductCard = ({ products }) => {
	return (
		<>
			<Styled.Inner>
				<Styled.Image imageUrl={products.imageUrl}>
					<Styled.Brand>{products.brand}</Styled.Brand>
					{products.type ? (
						<Styled.Presentation>{products.type}</Styled.Presentation>
					) : (
						""
					)}
				</Styled.Image>
				<Styled.Information>
					<Styled.Title>{products.title}</Styled.Title>;
					<Flex row center full></Flex>
					<Flex column left justifyCenter full>
						{/* <FlexItem order="2">
						<Type>{type}</Type>
					</FlexItem> */}
						<FlexItem order="1">
							<Styled.Type>{products.code}</Styled.Type>
						</FlexItem>
					</Flex>
					<Styled.Price>${products.price}</Styled.Price>
				</Styled.Information>
			</Styled.Inner>
		</>
	);
};

export default ProductCard;
