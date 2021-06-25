import {Route, Redirect} from "react-router-dom"
import {useContext} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"

export const PrivateRoute=({component: Component})=>{
    
    const {autenticated} = useContext(LogInContext)
   
    return (
        <Route
        render={(props) => autenticated === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login'}} />}
      />
    )
}

