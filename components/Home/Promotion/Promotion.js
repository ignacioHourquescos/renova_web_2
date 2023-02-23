// import Container from "./styles";

// export default function Promotion({ promotions }) {
// 	return (
// 				<PromotionalCard key={idx} promotions={element} />
// 	);
// }

import { Styled } from "./styles";

const PromotionalCard = ({ promotions }) => {
	return (
		<Styled.Inner image={promotions?.url}>
			<Styled.Ribbon>
				<Styled.TextContainer>
					<Styled.Title>{promotions?.title}</Styled.Title>
					<Styled.Description>{promotions?.description}</Styled.Description>
				</Styled.TextContainer>
				<Styled.IndividualPrice>
					<Styled.PriceIndicator>Pagas por bidon</Styled.PriceIndicator>
					<Styled.Price>${promotions?.price}</Styled.Price>
				</Styled.IndividualPrice>
			</Styled.Ribbon>
			<Styled.Validity>Valido hasta: {promotions?.validity}</Styled.Validity>
		</Styled.Inner>
	);
};

export default PromotionalCard;
