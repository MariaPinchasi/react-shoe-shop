import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [userName, setUserName] = useState('');

    const adminLogged = () => {
        setIsAdmin(true);
    };
    const userLogged = () => {
        setIsUser(true);
    };


    return <AppContext.Provider value={{
        isAdmin,
        setIsAdmin,
        adminLogged,
        isUser,
        setIsUser,
        userLogged,
        userName,
        setUserName
    }}>{children}
    </AppContext.Provider>;
}