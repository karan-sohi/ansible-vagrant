import axios from "axios";

export default axios.create({
  baseURL: "{{ http_api_location }}",
  headers: {
    "Content-type": "application/json"
  }
});
