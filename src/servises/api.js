import axios from "../const/axiosBaseUrl";

export async function fetchData() {
  const response = await axios.get();
  return response;
}
