import React, {useState,useEffect, useCallback} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token);
    }
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
    },[])

    useEffect(()=>{
        // localStorage.setItem('token',token);
        if(userIsLoggedIn){
            const timeoutId = setTimeout(()=>{
                logoutHandler()
            },3600000);
            return ()=> clearTimeout(timeoutId);
        }
    },[token,logoutHandler,userIsLoggedIn]);


    const authContext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return (
        <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
    );
}

export default AuthContext;