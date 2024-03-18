import axios from "../api/axios";
import useAxiosPrivate from "./useAxiosPrivate";

const useApi = () => {
  const axiosPrivate = useAxiosPrivate();

  const loginApi = (data) => axios.post("/auth/login", data);
  const logoutApi = () => axiosPrivate.post("/auth/logout");

  const getSceneByUrl = () => axiosPrivate.get("/scenes/sachintha/test-scene");

  return {
    loginApi,
    logoutApi,
    getSceneByUrl,
  };
};

export default useApi;
