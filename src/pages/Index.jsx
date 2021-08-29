import axios from "axios";
import { useEffect, useState } from "react";
import { useGraph } from "../context/graph";
import { useAuth } from "../context/auth";

export const Page = () => {
  const [me, setMe] = useState(null);

  const { callEndpoint } = useGraph();
  const { logout } = useAuth();

  useEffect(() => {
    const getMe = async () => {
      let _me = await callEndpoint(
        "http://localhost:4000/api/user/612a6de0bbecf4b22bbe6dad"
      );

      setMe(_me);
    };
    getMe();
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/login", {
      withCredentials: true,
    });
  });

  return (
    <div>
      Index <p>Me: {JSON.stringify(me)}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
