export const brandColorHandler = (brand) => {
	if (brand.toLowerCase() == "motul") {
		return "#CF1A0E";
	} else if (brand.toLowerCase() == "valvoline") {
		return "#3C3984";
	} else if (brand.toLowerCase() == "petronas") {
		return "#0BA19B";
	} else if (brand.toLowerCase() == "fram") {
		return "orange";
	}
};
