import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    console.log("refreshing token");
    const response = await axios.get("/auth/refresh_token", {
      withCredentials: true,
    });
    setAuth((prev) => {
      return {
        ...prev,
        roleName: response?.data?.roleName,
        accessToken: response?.data?.accessToken,
      };
    });
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
