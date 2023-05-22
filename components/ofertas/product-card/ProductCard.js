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
					<Styled.Title>{products.title}</Styled.Title>
					<Styled.DetailContainer>
						<Styled.Code>{products.id}</Styled.Code>

						<Styled.Price>${products.price.toFixed()}</Styled.Price>
					</Styled.DetailContainer>
				</Styled.Information>
			</Styled.Inner>
		</>
	);
};

export default ProductCard;
