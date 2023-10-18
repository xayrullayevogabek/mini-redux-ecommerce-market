import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const res = error.response;
    if (res.status === 401) {
      // Redirect to the login page or handle unauthorized access as needed
      window.location.href = "http://localhost:3000"; // Add the full URL
    } else {
      console.error(
        "Looks like there was a problem. Status Code: " + res.status
      );
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
