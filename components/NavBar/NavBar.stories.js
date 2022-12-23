import React from "react";
import NavBar from "./NavBar";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/NavBar",
	component: NavBar,
	// argTypes: {
	// 	backgroundColor: { control: "color" },
	// },
};

const products = {
	name: "Turbolight 4100",
	description: "Aceite semi sintetico",
	presentation: "4L",
	graduation: "10W40",
	brand: "Motul",
	price: "4580",
	code: "4100/5",
	type: "SEMI-SINTETICO",
	color: "red",
	urlImage:
		"https://http2.mlstatic.com/D_NQ_NP_711722-MLA43052442453_082020-O.webp",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <NavBar />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: "Button",
	backgroundColor: "black",
};
