import styled from "styled-components";
import Card from "./styles";

const PromotionalCard = ({ dummyProduct }) => {
	return (
		<Card url={dummyProduct.url}>
			<Card.Title title={dummyProduct.title} />
			<Card.Ribbon>
				<Card.Description description={dummyProduct.description} />
				<Card.Conditions
					price={dummyProduct.price}
					validity={dummyProduct.validity}
				/>
			</Card.Ribbon>
		</Card>
	);
};

export default PromotionalCard;
