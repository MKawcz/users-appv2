import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    // AuthProvider zarządza stanem zalogowanego użytkownika i udostępnia funkcje login i logout.
    const login = (user) => {
        setLoggedInUser(user);
    };

    const logout = () => {
        setLoggedInUser(null);
    };

    //Dzięki AuthContext.Provider, wszystkie podrzędne komponenty mają dostęp do kontekstu autoryzacji.
    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
