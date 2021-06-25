import {Route, Redirect, useLocation} from "react-router-dom"
import {useContext, useState, useEffect} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"

export const PrivateRoute=({component: Component})=>{
    
    const {autenticated} = useContext(LogInContext)
    const [paramId, setParamId]=useState()

    let location = useLocation()
    useEffect(()=>{
      location.pathname.includes("detail") && setParamId(location.pathname.slice(14))
    },[location])
    if(Component.props !== undefined) console.log(Component.props.location)


    return (
        <Route
        render={(props) => autenticated === true
          ? <Component {...props} id={paramId} />  
          : <Redirect to={{pathname: '/login'}} />}
      />
    )
}

