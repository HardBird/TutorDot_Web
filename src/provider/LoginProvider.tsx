import React, { useState } from 'react';
import LoginContext from '../context/LoginContext';
const LoginProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(false);
    const [tokenSet, setToken] = useState("");

    return (
        <LoginContext.Provider value={{
            userToken, setUserToken, tokenSet, setToken
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;