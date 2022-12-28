import styled from "styled-components";
import device from "../../../utils/utils";

export const Description = styled.div`
	width: 100%;
	font-size: rem;
	color: white;
`;

export const Ribbon = styled.div`
	width: 100%;
	display: flex;
	padding: 5%;
	justify-content: space-between;
	background-color: rgb(0, 0, 0, 0.8);
	height: 30%;
	position: absolute;
	bottom: 0;
	right: 0;
	border-radius: 0 0 5px 5px;
`;

export const Title = styled.div`
	width: 90%;
	padding: 5%;
	font-size: 2rem;
	color: white;
`;

export const Conditions = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	font-size: 1rem;
	color: orange;
`;

export const Price = styled.div`
	color: orange;
	font-size: 2rem;
	font-weight: bold;
`;

export const Validity = styled.div`
	color: yellow;
`;
export const Inner = styled.div`
	border-radius: 5px;
	box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
	width: 46%;
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	margin: 2%;
	position: relative;
	background-color: white;
	@media ${device.mobileL} {
		width: 96%;
		background-size: cover;
		background-position: center;
		margin-bottom: 10%;
	}
`;
