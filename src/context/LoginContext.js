import {createContext, useContext, useReducer } from "react";

const LoginContext = createContext({isAuthenticated:false})


const loginReducer = (state, action) =>{
    const { type, payload } = action;

    switch(type){
        case 'LOGIN':
            console.log("+++++++++",{...state, isAuthenticated:true});
            return {...state, isAuthenticated:true}
        case 'LOGOUT':
            return {...state, isAuthenticated:false}
        default:
            return
    }

}

export const LoginProvider = ({children}) => {
    const [isAuthenticated, dispatch] = useReducer(loginReducer,{isAuthenticated:false})
    const login = () => {
        dispatch({type:"LOGIN", payload:true})
    }
    const logout = () => {
        dispatch({type:"LOGOUT", payload:false})
    }

    const value = {
        isAuthenticated,
        login,
        logout
    }

    return (<LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>)
}

const useLoginContext = () => {
    const context = useContext(LoginContext)
    console.log("&&&&&&&&&",context)
    return context;
}
export default useLoginContext;