// TODO: Implement AuthContext.js
// src/context/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

// Define the context structure
const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    login: (userData) => {},
    logout: () => {}
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{
            user: user,
            isAuthenticated: user !== null,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};
