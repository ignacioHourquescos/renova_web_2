import styled from "styled-components";
import device from "../../utils/utils";

export const Styled = {
	Inner: styled.div.attrs((props) => ({
		type: "text",
		image: props.image,
	}))`
		border-radius: 5px;
		box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
		width: 46%;
		height: 40vh;
		background-size: cover;
		background-repeat: no-repeat;
		margin: 2%;
		position: relative;

		background-image: url(${(props) => props.image});
		background-size: cover;
		@media ${device.mobileL} {
			width: 100%;
			margin: 0%;
			background-size: cover;
			background-position: center;
			margin-bottom: 10%;
		}
	`,
	Ribbon: styled.div`
		width: 100%;
		padding: 3%;
		display: flex;
		justify-content: space-between;

		background-color: rgb(0, 0, 0, 0.8);
		height: 35%;
		position: absolute;
		bottom: 0;
		right: 0;
		border-radius: 0 0 5px 5px;
	`,
	TextContainer: styled.div`
		padding: 0.5rem;
	`,
	Title: styled.div`
		width: 100%;
		font-size: 1.5rem;
		color: White;
		top: 3%;
		font-weight: bold;
		padding-bottom: 1rem;
	`,
	Description: styled.div`
		width: 100%;
		font-size: 1.2rem;
		color: white;
		font-weight: 100;
	`,
	Validity: styled.div`
    color: black;
    position: absolute;
    right: 3%;
    top:3%;
    background-color:grey;
    font-size:0.8:rem;
`,
	IndividualPrice: styled.div`
		border-left: 1px solid white;
		padding-left: 1rem;
		display: flex;
		flex-direction: column;
		align-content: flex-end;
		align-items: flex-end;
	`,
	PriceIndicator: styled.div`
		margin-bottom: 1rem;

		color: white;
	`,

	Price: styled.div`
		color: orange;
		font-size: 2rem;
		font-weight: bold;
	`,
};
