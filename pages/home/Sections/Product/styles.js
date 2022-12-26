import React from "react";
import styled from "styled-components";
import device from "../../../../utils/utils";

const Container = ({ children, image, url, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export default Container;

const Inner = styled.div`
	width: 75%;
	margin: 0 12.5%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	background-color: none;
	@media ${device.mobileL} {
		width: 90%;
		margin: 5%;
	}
`;
