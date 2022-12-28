import Card from "./components";

const PromotionalCard = ({ promotions }) => {
	return (
		<Card url={promotions?.url}>
			<Card.Title title={promotions?.title} />
			<Card.Ribbon>
				<Card.Description description={promotions?.description} />
				<Card.Conditions
					price={promotions?.price}
					validity={promotions?.validity}
				/>
			</Card.Ribbon>
		</Card>
	);
};

export default PromotionalCard;
