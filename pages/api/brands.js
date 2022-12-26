// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function getBrands(req, res) {
	var brandsArray = [];
	var category = [];
	let shareCode = "1HB6nV0ZAPyHN3bOqKkg7_WYekddESifPuU7ZoHE6teM"; //CODE from URL https://docs.google.com/spreadsheets/d/1b92NcpkSSB1C4NnUbqHAW61ubT-d3QzlXggN-OZI9Eo/edit#gid=0
	let API_KEY = "AIzaSyClsGtZTrU2rzg3lYq2tN8CI1PQzGdyPRw";
	let sheetName = "PRODUCTOS";

	fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${shareCode}/values/${sheetName}?alt=json&key=${API_KEY}`
	)
		.then((response) => response.json())
		.then((data) => {
			for (var i = 1; i < data.values.length; i++) {
				brandsArray.push(data.values[i][1]);
			}
			console.log(brandsArray);
			const brandsArrayFiltered = brandsArray.filter(onlyUnique);
			console.log(`UNIQUE BRANDS`, brandsArrayFiltered);
			res.send(JSON.stringify(brandsArrayFiltered));
		});
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}
