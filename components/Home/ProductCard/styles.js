import styled from "styled-components";
import device from "../../../utils/utils";

export const Styled = {
	Inner: styled.div`
		box-shadow: 0 0 7px 0px rgba(0, 0, 0, 0.1);
		width: 18%;
		height: 40vh;
		margin: 0%;
		border-left: 10px solid;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		background-color: white;
		position: relative;
		margin: 1%;
		@media ${device.mobileL} {
			width: 46%;
			height: 30vh;
			background-size: cover;
			background-position: center;
			margin-bottom: 5%;
			border-left: 5px solid;
			margin: 2%;
		}
	`,
	Image: styled.div.attrs((props) => ({
		type: "text",
		imageUrl: props.imageUrl,
	}))`
		background-image: url(${(props) => props.imageUrl});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		height: 70%;
		width: 80%;
		margin: 0 10%;
		${"" /* position: relative; */} @media ${device.mobileL} {
			width: 80%;
			margin: 0 10%;
		}
	`,
	Brand: styled.div`
		position: absolute;
		right: 0.5rem;
		font-size: 0.8rem;
		top: 0.5rem;
		color: white;
		background-color: black;
		font-weight: 400;
		padding: 0.1rem;
		display: flex;
		@media ${device.mobileL} {
			font-size: 0.6rem;
			right: 0;
		}
	`,
	Presentation: styled.div`
		position: absolute;
		right: 0.5rem;
		font-size: 0.8rem;
		top: 1.7rem;
		color: white;
		background-color: black;
		font-weight: 400;
		padding: 0.1rem;
		display: flex;
		@media ${device.mobileL} {
			font-size: 0.6rem;
			right: 0;
			top: 1.4rem;
		}
	`,
	Information: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		align-content: center;
		align-items: center;
		background-color: black;
		color: white;
		height: 30%;
	`,
	Title: styled.div`
		font-size: 1.3rem;
		background-color: #464646;
		color: white;
		width: 100%;
		padding: 0.7rem;
		text-align: center;
		@media ${device.mobileL} {
			font-size: 1rem;
			padding: 0.3rem;
		}
	`,
	Type: styled.div`
		font-size: 1rem;
		background-color: grey;
		padding: 0.2rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		margin-bottom: 0.2rem;
		text-transform: uppercase;
		text-align: center;

		@media ${device.mobileL} {
			font-size: 0.5rem;
			padding: 0;
		}
	`,
	Price: styled.div`
		right: 0.5rem;
		bottom: 0.5rem;
		font-size: 1.5rem;
		text-shadow: #000 1px 0 10px;
		font-weight: 800;
		padding: 0.4rem 0;
		margin: 0 1rem;

		@media ${device.mobileL} {
			font-size: 1.4rem;
			padding: 0.2rem 0;
			margin: 0 0.3rem;
		}
	`,
	InnerUnavailable: styled.div`
		position: absolute;
		top: 0;
		right: 0;
		background-color: rgba(28, 28, 28, 0.638);
		text-align: center;
		padding: 50% 0;
		color: white;
		width: 100%;
		height: 100%;
		font-weight: bold;
	`,
};
