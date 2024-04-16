import { createContext, useContext, useState, useMemo, useEffect} from "react";
import AuthService from "../services/AuthService";
import { useNavigate, useLocation } from 'react-router-dom'
import { useLocalStorage } from "./useLocalStorage";
import $auth_api from "../http/auth_index";

const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {
    const [token, setToken] = useLocalStorage("token", null);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);   
    const navigate = useNavigate();
    const location = useLocation();
    const position = location.state?.position;

    useEffect(() => {
        if (document.cookie) {
            console.log(document.cookie);
            setIsAuth(true);
        }
    }, [])

    async function registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
        } catch (e) {
            console.log(e);
        } 
    }

    async function login(email, password) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            navigate(`/chat`);
        } catch (e) {
            console.log(e);
        } 
    }

    const logout = () => {
        setIsAuth(false);
        setToken(null);
    }

    const value = useMemo(
        () => ({
            isAuth,
            setIsAuth,
            login, 
            logout
        }), 
        [isAuth]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}