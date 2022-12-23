import React from "react";
import PromotionalCard from "./PromotionalCard";

const promotions = {
	url: "https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/08/elaion-f30.jpg",
	title: "Promocion Octubre",
	description: "Lubricantes especiales",
	price: "300",
	validity: "Enero 2023",
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/PromotionalCard",
	component: PromotionalCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
	<PromotionalCard promotions={promotions} {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "Button",
	backgroundColor: "black",
};
