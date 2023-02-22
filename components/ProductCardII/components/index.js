import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import {
	Container,
	Brand,
	Image,
	InnerUnavailable,
	Title,
	Presentation,
	Price,
	Type,
	Inner,
} from "./styles";

// eslint-disable-next-line react/display-name
const Card = ({
	children,
	image,
	imageUrl,
	title,
	description,
	graduation,
	color,
	price,
	norms,
	type,
	code,
	...restProps
}) => {
	return (
		<Inner
			style={{ backgroundImage: `url(${imageUrl})`, borderColor: `${color}` }}
			{...restProps}
		>
			{children}
		</Inner>
	);
};

Card.Image = ({
	children,
	imageUrl,
	brand,
	type,
	presentation,
	...restProps
}) => {
	return (
		<Image imageUrl={imageUrl} {...restProps}>
			<Brand>{brand}</Brand>
			{type ? <Presentation>{type}</Presentation> : ""}
		</Image>
	);
};

Card.Information = ({
	children,
	title,
	price,
	type,
	code,
	color,
	...restProps
}) => {
	return (
		<Container {...restProps}>
			<Title>{title}</Title>
			<Flex row center full>
				<Flex column left justifyCenter full>
					{/* <FlexItem order="2">
						<Type>{type}</Type>
					</FlexItem> */}
					<FlexItem order="1">
						<Type>{code}</Type>
					</FlexItem>
				</Flex>
				<Price>${price}</Price>
			</Flex>
		</Container>
	);
};

export default Card;
