import styled from "styled-components";
import device from "../../utils/utils";

export const Header = styled.div`
	color: black;
	border-bottom: 5px solid black;
	font-size: 2rem;
	font-weight: bold;
	width: 75%;
	margin: 5% 12.5%;
	padding: 1rem 0;
	text-align: center;
	@media ${device.mobileL} {
		width: 90%;
		margin: 5%;
		margin-top: 15%;
	}
`;
