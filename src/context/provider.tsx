import { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextType {
    isAutenticated: boolean;
    setAutenticated: (newState: boolean) => void;
}

interface UserContextProps {
    children: ReactNode;
}

const initialValue = {
    isAutenticated: false,
    setAutenticated: () => { }
}

export const Context = createContext<UserContextType>(initialValue);

export const Provider = ({ children }: UserContextProps) => {

    const [isAutenticated, setAutenticated] = useState(initialValue.isAutenticated)

    useEffect(() => {
        if (isAutenticated) {
            localStorage.setItem('autenticated', 'true')
        } else {
            return
        }
    }, [isAutenticated])

    return (
        <Context.Provider value={{ isAutenticated, setAutenticated }}>
            {children}
        </Context.Provider>
    )
}