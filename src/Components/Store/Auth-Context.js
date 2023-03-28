import React, {useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthProvider = (props) => {

    const [token, setToken] = useState(null);
    const [userIsLoggedIn, setUser] = useState(false);

    const loginHandler = (token) => {
        setToken(token);
        setUser(true);
        
    }
    const logoutHandler = () => {
        setToken(null);
        setUser(false)
    }

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