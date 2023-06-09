import { Styled } from "./styles";

// internalNotionCode: item?.id,
// id: item.properties.codigo.title[0]?.plain_text,
// title: item.properties.titulo.rich_text[0]?.plain_text,
// brand: item.properties.marca.rich_text[0]?.plain_text,
// active: item.properties.activo?.checkbox,
// discount: item.properties.descuento?.number,
// imageUrl: item.properties.imagen.files[0]?.file.url,
// category: item.properties.categoria.select?.name,

const PromotionalCard = ({ promotions }) => {
	return (
		<>
			{promotions.active && (
				<Styled.Inner>
					<Styled.Image imageUrl={promotions?.imageUrl}></Styled.Image>
					<Styled.Ribbon>
						<Styled.TextContainer>
							<Styled.Title>{promotions.id}</Styled.Title>
							<Styled.Description>{promotions?.title}</Styled.Description>
							<Styled.Detail>{promotions?.detail}</Styled.Detail>
						</Styled.TextContainer>
						<Styled.IndividualPrice>
							<Styled.PriceIndicator>Pagas x bidon</Styled.PriceIndicator>
							<Styled.Price>${promotions?.specialPrice}</Styled.Price>
						</Styled.IndividualPrice>
					</Styled.Ribbon>
					{/* <Styled.Validity>
            Valido hasta: {promotions?.validity}
          </Styled.Validity> */}
				</Styled.Inner>
			)}
		</>
	);
};

export default PromotionalCard;
