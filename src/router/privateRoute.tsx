import React, { useContext } from "react";
import { Navigate } from "react-router-dom"
import { Context } from "../context/provider";

export function PrivateRoute({ children }: any) {

    const user = localStorage.getItem('autenticated')

    return user == 'true' ? children : <Navigate to="/" />
}