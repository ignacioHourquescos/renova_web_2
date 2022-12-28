// import React from "react";
// import styled from "styled-components";
// import device from "../../utils/utils";

// const Card = ({ children, image, url, title, description, ...restProps }) => (
// 	<Inner style={{ backgroundImage: `url(${url})` }} {...restProps}>
// 		{children}
// 	</Inner>
// );

// export default Card;

// const Inner = styled.div`
// 	border-radius: 5px;
// 	box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
// 	width: 46%;
// 	height: 50vh;
// 	background-size: cover;
// 	background-repeat: no-repeat;
// 	margin: 2%;
// 	position: relative;
// 	background-color: white;
// 	@media ${device.mobileL} {
// 		width: 96%;
// 		background-size: cover;
// 		background-position: center;
// 		margin-bottom: 10%;
// 	}
// `;

// Card.Title = ({ title }) => {
// 	return <Title>{title}</Title>;
// };

// Card.Ribbon = ({ children, ...restProps }) => {
// 	return <Ribbon {...restProps}>{children}</Ribbon>;
// };
// Card.Description = ({ description }) => {
// 	return <Description>{description}</Description>;
// };

// const Conditions = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	color: white;
// 	font-size: 1rem;
// 	color: orange;
// `;

// const Price = styled.div`
// 	color: orange;
// 	font-size: 2rem;
// 	font-weight: bold;
// `;

// const Validity = styled.div`
// 	color: yellow;
// `;

// Card.Conditions = ({ price, validity }) => {
// 	return (
// 		<Conditions>
// 			<Price>${price} </Price>
// 			<Validity>{validity}</Validity>
// 		</Conditions>
// 	);
// };

// const Description = styled.div`
// 	width: 100%;
// 	font-size: rem;
// 	color: white;
// `;

// const Ribbon = styled.div`
// 	width: 100%;
// 	display: flex;
// 	padding: 5%;
// 	justify-content: space-between;
// 	background-color: rgb(0, 0, 0, 0.8);
// 	height: 30%;
// 	position: absolute;
// 	bottom: 0;
// 	right: 0;
// 	border-radius: 0 0 5px 5px;
// `;

// const Title = styled.div`
// 	width: 90%;
// 	padding: 5%;
// 	font-size: 2rem;
// 	color: white;
// `;
