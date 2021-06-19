import {TeamSection} from "../components/TeamSection/TeamSection"
import {NavBarComp} from "../components/NavBar/NavBar"
import {useContext} from "react"
import { LogInContext } from "../LogInContext/LogInContext"


export const Home = ()=>{

    const {autenticated} = useContext(LogInContext)

    return (
  
        <div>
             <NavBarComp/>
             <p>Este es el home</p>
            <TeamSection/>
        </div> 
        
    )
} 
