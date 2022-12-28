import React from "react";

import {
	Conditions,
	Description,
	Inner,
	Price,
	Ribbon,
	Title,
	Validity,
} from "./styles";

const Card = ({ children, image, url, title, description, ...restProps }) => (
	<Inner style={{ backgroundImage: `url(${url})` }} {...restProps}>
		{children}
	</Inner>
);

Card.Title = ({ title }) => {
	return <Title>{title}</Title>;
};

Card.Ribbon = ({ children, ...restProps }) => {
	return <Ribbon {...restProps}>{children}</Ribbon>;
};
Card.Description = ({ description }) => {
	return <Description>{description}</Description>;
};

Card.Conditions = ({ price, validity }) => {
	return (
		<Conditions>
			<Price>${price} </Price>
			<Validity>{validity}</Validity>
		</Conditions>
	);
};

export default Card;
