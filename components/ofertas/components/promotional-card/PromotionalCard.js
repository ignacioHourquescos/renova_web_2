import { Styled } from "./styles";

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
						{promotions?.specialPrice ? (
							<Styled.IndividualPrice>
								<Styled.PriceIndicator>Pagas x bidon</Styled.PriceIndicator>
								<Styled.Price>
									${addThousandSeparator(promotions?.specialPrice)}
								</Styled.Price>
							</Styled.IndividualPrice>
						) : (
							<></>
						)}
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

function addThousandSeparator(number) {
	// Convert number to string
	let numberString = number?.toString();

	// Split the string into parts before and after the decimal point (if any)
	let parts = numberString?.split(".");
	if (parts)
		// Add a dot as a thousand separator to the part before the decimal point
		parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	// Join the parts back together with a dot as the decimal separator
	return parts?.join(".");
}
