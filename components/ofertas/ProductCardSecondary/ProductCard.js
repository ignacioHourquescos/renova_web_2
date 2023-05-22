import { Styled } from "./styles";
import Flex, { FlexItem } from "styled-flex-component";
import { useEffect, useState } from "react";

const ProductCard = ({ products }) => {
	// const [prices, setPrices] = useState();

	return (
		<>
			<Styled.Inner
				// brand={products.brand}
				style={
					{
						// backgroundImage: `url(${products.url})`,
						// borderColor: `${products.color}`,
					}
				}
			>
				{/* <Styled.Image content={products.imageUrl} /> */}
				<Styled.Graduation content={products.graduation} />
				<Styled.Presentation content={products.presentation} />
				<Styled.Container>
					<Styled.Name content={products.name} data-testid="name" />
					<Flex row center full>
						<Flex column left justifyCenter full>
							<Styled.Type content={products.type} data-testid="type" />
							<Styled.Type content={products.norms} data-testid="norms" />
						</Flex>
						{/* <Styled.Price content={products.price.toFixed()} /> */}
					</Flex>
				</Styled.Container>
			</Styled.Inner>
		</>
	);
};

export default ProductCard;
