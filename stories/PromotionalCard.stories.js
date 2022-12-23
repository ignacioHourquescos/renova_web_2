import React from "react";
import PromotionalCard from "../components/PromotionalCard/PromotionalCard";

export default {
	title: "PromotionalCard",
	component: PromotionalCard,
};

const message = {
	author: "Maksym",
	body: "Hello world. It's the first message!",
	date: "12.04.2020",
	title: "Alguna Promo",
};

export const ToStorybook = () => <PromotionalCard {...message} />;

ToStorybook.story = {
	name: "Simple Message",
};
