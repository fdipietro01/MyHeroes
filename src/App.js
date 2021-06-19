import React from "react";
import {LogIn} from "./container/LogIn/LogIn"
import {Home} from "./Home/Home"
import {Seeker} from "./container/Seeker/Seeker"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LogInAuth} from "./LogInContext/LogInContext";


export const App = ()=>{
    return (
        <div>
        <LogInAuth>    
            <Router>            
                <Switch>
                    <Route path={"/login/"}>
                        <LogIn/>
                    </Route>
                    <Route path={"/team/"}>
                        <Home/>     
                    </Route>
                    <Route path={"/seeker/"}>
                        <Seeker/>
                    </Route>
                    <Route path={"/"}>
                        <LogIn/>
                    </Route>
                </Switch>
            </Router>
        </LogInAuth>
        </div>
    )
} 
