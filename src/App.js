import React, { useContext, useEffect } from "react";
import {LogIn} from "./container/LogIn/LogIn"
import {Home} from "./Home/Home"
import {Seeker} from "./container/Seeker/Seeker"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LogInAuth} from "./contexts/LogInContext/LogInContext"
import {TeamSelection} from "./contexts/TeamContext/TeamContext"
import {HeroeDetail} from "../src/container/HeroeDetail/HeroeDetail"
import {PrivateRoute} from "./container/RoutHandler/PrivateRoute";
import {LogInContext} from "./contexts/LogInContext/LogInContext"
import {NavBarComp} from "./components/NavBar/NavBar";


export const App = ()=>{

    const {isAuthenticated}=useContext(LogInContext)
    isAuthenticated()
    return (
        <div>
      
            <TeamSelection>
                <Router>  
                <NavBarComp/>       
                    <Switch>
                        <PrivateRoute path={'/team'} component={Home} />
                        <PrivateRoute path={'/seeker'} component={Seeker}/>
                        <PrivateRoute path={"/detail-heroe/:id"} component={HeroeDetail}/>
                        <Route path={"/login"}>
                            <LogIn/>
                        </Route>
                        <Route path={"/"}>
                            <LogIn/>
                        </Route>
                    </Switch>
                </Router>
            </TeamSelection>
    
        </div>
    )
} 
