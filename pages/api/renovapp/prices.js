import axios from "axios";

const get_prices = async () => {
	const response = await axios.get(
		`${process.env.NEXT_PUBLIC_URL}/obtenerListadoArticulos`
	);
	return response.data;
};

export { get_prices };
