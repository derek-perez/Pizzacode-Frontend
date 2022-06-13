import { createContext, useEffect, useState } from "react";
import pizzaApi from "../api/pizzaApi";


interface ContextProps {
    user: UserProps;

    checkLogin: () => void;
    setUser: React.Dispatch<React.SetStateAction<UserProps>>;
}

interface UserProps {
    _id: string;
    nombre: string;
    correo: string;
    telefono: string;

    cards: string[];
    direcciones: string[];
    pagos: string[];
}

export const UserContext = createContext({} as ContextProps);

export const UserContextProvider = ({ children }: any) => {
    const [user, setUser] = useState({} as UserProps);

    useEffect(() => {
        if (Object.entries(user).length !== 0)  {
            localStorage.setItem('user', JSON.stringify(user.correo));
        }
    }, [user]);

    const checkLogin = async () => {
        const userLS = JSON.parse(localStorage.getItem('user') || '{}');

        if (userLS.length !== undefined) {
            await pizzaApi.post('/auth/loginEmail', { correo: userLS })
                .then(res => {
                    setUser(res.data.usuario);

                    localStorage.setItem('user', JSON.stringify(res.data.usuario.correo));
                    localStorage.setItem('token', JSON.stringify(res.data.token));
                })
                .catch(console.log)
        }

    }
    

    return (
        <UserContext.Provider value={{
            user,

            checkLogin,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}