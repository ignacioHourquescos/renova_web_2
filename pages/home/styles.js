import React from "react";
import styled from "styled-components";
import device from "../../utils/utils";
// const Container = ({ children, ...restProps }) => (
// 	<Inner {...restProps}>{children}</Inner>
// );

// export default Container;

export const Container = styled.div`
	width: 100%;
`;

export const Header = styled.div`
	background-color: black;
	color: white;
	font-size: 2rem;
	font-weight: bold;
	width: 75%;
	margin: 5% 12.5%;
	padding: 2rem 0;
	text-align: center;
	@media ${device.mobileL} {
		width: 90%;
		margin: 5%;
		margin-top: 15%;
	}
`;
