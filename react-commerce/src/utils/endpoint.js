import axios from "axios";

const api = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return async (url, body = {}) => {
    try {
      const requestOptions = {
        method,
        url,
      };

      if (body && method === "GET") {
        requestOptions.params = body;
      } else if (body) {
        requestOptions.data = body;
      }

      const response = await axios(requestOptions);
      return response;
    } catch (error) {
      console.error("Error while calling API:", error);

      if (axios.isAxiosError(error)) {
        throw error.response?.data || new Error("Unknown Axios error occurred");
      } else {
        throw new Error("Unknown error occurred");
      }
    }
  };
}

export const endpoint = {
  postRegister: (payload) => api.post("http://localhost:3000/users", payload),
  getLogin: (param) => api.get("http://localhost:3000/users", param),
};
