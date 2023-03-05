import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logado from "../view/login";
import { PrivateRoute } from "./privateRoute"
import MainContent from './../view/index';

export function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/logado" element={
                    <PrivateRoute>
                        <Logado />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}