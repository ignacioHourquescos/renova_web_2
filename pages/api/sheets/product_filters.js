import axios from "axios";

const get_products_filters = async () => {
	var array = [];
	var category = [];
	let shareCode = "1HB6nV0ZAPyHN3bOqKkg7_WYekddESifPuU7ZoHE6teM"; //CODE from URL https://docs.google.com/spreadsheets/d/1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo/edit#gid=0
	let API_KEY = "AIzaSyClsGtZTrU2rzg3lYq2tN8CI1PQzGdyPRw";
	let sheetName = "FILTROS";

	const response = await axios
		.get(
			`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
		)
		.then(function (response) {
			for (var i = 1; i < response.data.values.length; i++) {
				array.push({
					active: response.data.values[i][0],
					brand: response.data.values[i][1],
					type: response.data.values[i][2],
					code: response.data.values[i][3],
					name: response.data.values[i][4],
					price: response.data.values[i][5],
					presentation: response.data.values[i][6],
					minimumQuantity: response.data.values[i][7],
					validity: response.data.values[i][8],
					imageUrl: response.data.values[i][9],
					color: brandColorHandler(response.data.values[i][1]),
				});
			}
		});
	return array;
};

export { get_products_filters };
// res.send(JSON.stringify(array));
const brandColorHandler = (brand) => {
	if (brand.toLowerCase() == "motul") {
		return "#CF1A0E";
	} else return "#000";
};
