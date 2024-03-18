import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();
  const isMounted = useRef(true);
  const isAlreadyCalled = useRef(false);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      if (isAlreadyCalled.current) return;
      isAlreadyCalled.current = true;
      try {
        console.log("verifying refresh token");
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted.current && setIsLoading(false);
        isAlreadyCalled.current = false;
      }
    };

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted.current = false;
    };
  }, [auth, persist, refresh]);

  return (
    <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  );
};

export default PersistLogin;
