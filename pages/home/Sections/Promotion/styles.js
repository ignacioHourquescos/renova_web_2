import React from "react";
import styled from "styled-components";

const Container = ({ children, image, url, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export default Container;

const Inner = styled.div`
	width: 80%;
	margin: 10%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
