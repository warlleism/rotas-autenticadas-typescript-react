import React, { useContext } from "react";
import { Context } from "../context/provider";

const MainContent = () => {

    const { isAutenticated, setAutenticated } = useContext(Context)

    return (
        <div>
            {
                isAutenticated
                    ?
                    <div> Tela de true</div>
                    :
                    <div>Tela de false</div>
            }

            <button onClick={() => { setAutenticated(!isAutenticated) }}>trocar</button>
        </div>
    )
}

export default MainContent;