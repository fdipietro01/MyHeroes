import {TeamSection} from "../components/TeamSection/TeamSection"
import {NavBarComp} from "../components/NavBar/NavBar"
import {HeroeStats} from "../components/HeroesStats/HeroesStats"
import {Container} from "react-bootstrap"
import "./Home.css"



export const Home = ()=>{

    return (
  
        <div  >
             <NavBarComp/>
             <Container className="bkg3" fluid>
             <HeroeStats/>
            <TeamSection/>
            </Container>
        </div> 
        
    )
} 
