import PromotionalCard from "../../../../components/PromotionalCard/PromotionalCard";
import Container from "./styles";

export default function Promotion({ promotions }) {
	return (
		<Container>
			{promotions?.map((element, idx) => (
				<PromotionalCard key={idx} promotions={element} />
			))}
		</Container>
	);
}
