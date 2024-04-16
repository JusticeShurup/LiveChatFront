import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useContext, useEffect } from "react";
import {observer} from "mobx-react-lite"
import { Context } from "..";

export const PrivateRoute = ({ children }) =>  {
  const { store } = useContext(Context);
  const location = useLocation();

  if (!store.isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
