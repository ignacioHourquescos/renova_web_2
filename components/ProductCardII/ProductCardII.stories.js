import React from "react";
import ProductCardII from "./ProductCardII";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/ProductCardII",
	component: ProductCardII,
};

const products = {
	active: "TRUE",
	brand: "fram",
	type: "Filtro aceite",
	name: "Filtro gol trend",
	code: "PH5548",
	price: "1150",
	type: "Aire",
	minimumQuantity: "24",
	imageUrl:
		"https://http2.mlstatic.com/D_NQ_NP_2X_927382-MLA41547305548_042020-F.webp",
	color: "orange",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductCardII products={products} {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "Button",
	backgroundColor: "black",
};
