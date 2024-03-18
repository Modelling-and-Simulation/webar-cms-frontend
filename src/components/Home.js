import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { getSceneByUrl } = useApi();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  const testFunction = () => {
    getSceneByUrl().then((res) => console.log(res.data));
  };

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>You are logged in!</p>
      <br />
      <button onClick={testFunction}>Test</button>
      <br />
      <br />
      <button onClick={signOut}>Sign Out</button>
    </section>
  );
};

export default Home;
