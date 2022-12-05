// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getProducts(req, res) {
	var array = [];
	var category = [];
	let shareCode = "1HB6nV0ZAPyHN3bOqKkg7_WYekddESifPuU7ZoHE6teM"; //CODE from URL https://docs.google.com/spreadsheets/d/1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo/edit#gid=0
	let API_KEY = "AIzaSyClsGtZTrU2rzg3lYq2tN8CI1PQzGdyPRw";
	let sheetName = "MASTER";

	fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => {
			for (var i = 1; i < data.values.length; i++) {
				array.push({
					id: data.values[i][0],
					title: data.values[i][1],
					description: data.values[i][2],
					price: data.values[i][3],
					validity: data.values[i][4],
					url: data.values[i][6],
				});
			}

			res.send(JSON.stringify(array));
		});
}
