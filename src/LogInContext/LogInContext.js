import React, {useState} from "react"

export const LogInContext = React.createContext({});

export const LogInAuth = ({children})=>{

    const [autenticated, setAutenticated] = useState(null)

    const isAuthenticated = ()=>{
        /* preguntarle a pri porque no me lo reconoce como función cuando lo paso por context"*/
        window.localStorage.getItem("token") !== null ? setAutenticated(true) : setAutenticated(false)
    }

    return (
        <LogInContext.Provider value={{autenticated, setAutenticated, isAuthenticated}}>
            {children}
        </LogInContext.Provider>
    )
}

