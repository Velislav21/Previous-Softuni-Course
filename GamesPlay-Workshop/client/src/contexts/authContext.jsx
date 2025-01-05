import { createContext, useState } from "react";

export const AuthContext = createContext({});


export const AuthContextProvider = (props) => {

        const [authState, setAuthState] = useState({})
    
        const changeAuthState = (state) => {
            localStorage.setItem('accessToken', state.accessToken)
            setAuthState(state)
        };
    
        const contextData = {
            _id: authState._id,
            email: authState.email,
            accessToken: authState.accessToken,
            isAuthenticated: !!authState.email,
            changeAuthState
        }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}