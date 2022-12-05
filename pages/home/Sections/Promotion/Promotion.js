import PromotionalCard from "../../../../components/PromotionalCard/PromotionalCard";
import Container from "./styles";

export default function Promotion({ dummyProduct }) {
	return (
		<Container>
			{dummyProduct?.map((element, idx) => (
				<PromotionalCard key={idx} dummyProduct={element} />
			))}
		</Container>
	);
}
