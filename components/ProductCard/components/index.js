import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import {
	Graduation,
	Inner,
	Name,
	Presentation,
	Price,
	Type,
	Image,
	Container,
} from "./styles";

export const Card = ({
	children,
	image,
	url,
	title,
	description,
	graduation,
	color,
	price,
	norms,
	type,
	...restProps
}) => {
	return (
		<Inner
			style={{ backgroundImage: `url(${url})`, borderColor: `${color}` }}
			{...restProps}
		>
			{children}
		</Inner>
	);
};

Card.Image = ({
	children,
	imageUrl,
	graduation,
	presentation,
	...restProps
}) => {
	return (
		<Image imageUrl={imageUrl} {...restProps}>
			<Graduation>{graduation}</Graduation>
			<Presentation>{presentation}</Presentation>
		</Image>
	);
};

Card.Information = ({
	children,
	name,
	price,
	type,
	norms,
	color,
	...restProps
}) => {
	return (
		<Container {...restProps}>
			<Name>{name}</Name>
			<Flex row center full>
				<Flex column left justifyCenter full>
					<FlexItem order="2">
						<Type>{type}</Type>
					</FlexItem>
					<FlexItem order="1">
						<Type>{norms}</Type>
					</FlexItem>
				</Flex>
				<Price>{price}</Price>
			</Flex>
		</Container>
	);
};
