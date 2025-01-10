import { addCommasForThousands } from "../../../../utils/brandColorFunction";
import { Styled } from "./styles";
import Flex, { FlexItem } from "styled-flex-component";
import Image from "next/image";
import { useState } from "react";
// import { brandColorHandler } from "../../utils/brandColorFunction";

const ProductCard = ({ products }) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<>
			{products.active && (
				<Styled.Inner borderColor="#CF1A0E">
					{!imageLoaded && <Styled.Placeholder />}
					<Image
						src={products.imageUrl}
						alt={products.title || "Product image"}
						width={500}
						height={300}
						priority={true}
						quality={75}
						loading="eager"
						onLoad={() => setImageLoaded(true)}
						style={{ opacity: imageLoaded ? 1 : 0 }}
					/>
					<Styled.Brand>{products.brand}</Styled.Brand>
					{products.type ? (
						<Styled.Presentation>{products.type}</Styled.Presentation>
					) : (
						""
					)}
					<Styled.Information>
						<Styled.Title>{products.title}</Styled.Title>
						<Styled.DetailContainer>
							<Styled.Code>{products.id}</Styled.Code>

							<Styled.Price>
								$
								{addCommasForThousands(
									Math.ceil(products.price.toFixed() / 5) * 5
								)}
							</Styled.Price>
						</Styled.DetailContainer>
					</Styled.Information>
				</Styled.Inner>
			)}
		</>
	);
};

export default ProductCard;
