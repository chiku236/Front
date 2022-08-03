import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

const api = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
  },
});

api.interceptors.request.use((req) => {
  if (sessionStorage.getItem("pos-access")) {
    req.headers.Authorization = `Bearer ${sessionStorage.getItem(
      "pos-access"
    )}`;
  }
  return req;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/refresh-token`,
          {
            refresh_token: `${localStorage.getItem("pos-refresh")}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("pos-refresh")}`,
            },
          }
        );

        sessionStorage.setItem("pos-access", data.accessToken);
        localStorage.setItem("pos-refresh", data.refreshToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return api.request(originalRequest);
      } catch (err) {
        console.error(err.message);
      }
    }
    throw error;
  }
);
