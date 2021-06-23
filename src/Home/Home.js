import {TeamSection} from "../components/TeamSection/TeamSection"
import {NavBarComp} from "../components/NavBar/NavBar"
import { HeroeStats } from "../components/HeroesStats/HeroesStats"



export const Home = ()=>{

    return (
  
        <div>
             <NavBarComp/>
             <HeroeStats/>
            <TeamSection/>
        </div> 
        
    )
} 
