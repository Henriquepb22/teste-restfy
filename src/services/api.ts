import axios from "axios";

const api = axios.create({
    baseURL: "https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io",
});

export default api;
