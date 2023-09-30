import React from "react";
import { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export default function Protected([children, authencation = true]) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //     if(authStatus==true)
    //         {
    //             navigate("/")
    //         }
    //         else if(authStatus==false)
    //         {
    //   navigate("/login")
    //         }
    if (authencation && authStatus !== authencation) {
      navigate("/login");
    } else if (!authencation && authStatus !== authencation) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authencation]);

  return loader ? <h1> Loading ...</h1> : <> {children}</>;
}
