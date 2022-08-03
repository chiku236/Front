import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/auth";

export function useLoadingWithRefresh() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/auth/refresh-token`,
          {
            refresh_token: `${localStorage.getItem("pos-refresh")}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "pos-refresh"
              )}`,
            },
          }
        );

        sessionStorage.setItem("pos-access", data.accessToken);
        localStorage.setItem("pos-refresh", data.refreshToken);
        localStorage.setItem("pos-user", JSON.stringify(data.user));
        dispatch(setUser(data.user));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, [dispatch]);

  return { loading };
}
