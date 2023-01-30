import axios from "axios";

export default axios.create({
	baseURL: process.env.REACT_APP_CONTAINER_API_BASE_URL,
});
