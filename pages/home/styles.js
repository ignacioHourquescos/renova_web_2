import React from "react";
import styled from "styled-components";

const Container = ({ children, image, url, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export default Container;

const Inner = styled.div`
	width: 100%;
	background-color: white;
`;
