import React from "react";
import styled from "styled-components";
import device from "../../../../utils/utils";

const Container = ({ children, image, url, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export default Container;

const Inner = styled.div`
	width: 90%;
	margin: 5%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space.between;
	background-color: none;
`;
