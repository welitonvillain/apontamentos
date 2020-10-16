import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface ICredentials {
    email: string;
    password: string; 
}

interface AuthContextState {
    user: object;
    signIn(credentials: ICredentials): Promise<void>
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Apontamento:token');
        const user = localStorage.getItem('@Apontament:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });



    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Apontamento:token', token);
        localStorage.setItem('@Apontament:user', JSON.stringify(user));

        setData({ token, user });
    }, []);


    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            { children }
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export { AuthProvider, useAuth }