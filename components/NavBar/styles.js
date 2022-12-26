import React from "react";
import styled from "styled-components";
import device from "../../utils/utils";
import Flex, { FlexItem } from "styled-flex-component";

// eslint-disable-next-line react/display-name
const Navigation = ({ children, item, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

const Inner = styled.div`
	width: 100%;
	height: 10%;
	background-color: grey;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`;
const Item = styled.div`
	padding: 0.2rem;
	background-color: white;
`;

Navigation.Item = ({ item }) => {
	return <Item>{item}</Item>;
};

export default Navigation;
