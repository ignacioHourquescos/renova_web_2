// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getProducts(req, res) {
	var array = [];
	var category = [];
	let shareCode = "1HB6nV0ZAPyHN3bOqKkg7_WYekddESifPuU7ZoHE6teM"; //CODE from URL https://docs.google.com/spreadsheets/d/1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo/edit#gid=0
	let API_KEY = "AIzaSyClsGtZTrU2rzg3lYq2tN8CI1PQzGdyPRw";
	let sheetName = "FILTROS";

	fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => {
			for (var i = 1; i < data.values.length; i++) {
				array.push({
					active: data.values[i][0],
					brand: data.values[i][1],
					type: data.values[i][2],
					code: data.values[i][3],
					name: data.values[i][4],
					price: data.values[i][5],
					presentation: data.values[i][6],
					minimumQuantity: data.values[i][7],
					validity: data.values[i][8],
					imageUrl: data.values[i][9],
					color: brandColorHandler(data.values[i][1]),
				});
			}

			res.send(JSON.stringify(array));
		});
}

const brandColorHandler = (brand) => {
	if (brand.toLowerCase() == "motul") {
		return "#CF1A0E";
	} else return "#000";
};
