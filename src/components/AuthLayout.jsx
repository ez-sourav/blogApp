import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStaus = useSelector((state) => state.authStaus);
  useEffect(() => {
    if (authentication && authStaus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStaus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStaus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
