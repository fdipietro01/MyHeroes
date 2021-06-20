import React from "react";
import {LogIn} from "./container/LogIn/LogIn"
import {Home} from "./Home/Home"
import {Seeker} from "./container/Seeker/Seeker"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LogInAuth} from "./contexts/LogInContext/LogInContext"
import {TeamSelection} from "./contexts/TeamContext/TeamContext"


export const App = ()=>{
    return (
        <div>
        <LogInAuth>    
            <TeamSelection>
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
            </TeamSelection>
        </LogInAuth>
        </div>
    )
} 
