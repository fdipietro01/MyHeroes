import {TeamSection} from "../components/TeamSection/TeamSection"
import {HeroeStats} from "../components/HeroesStats/HeroesStats"
import {Container} from "react-bootstrap"
import "./Home.css"



export const Home = ()=>{

    return (
  
        <div>
             <Container className="bkg3" fluid>
             <HeroeStats/>
            <TeamSection/>
            </Container>
        </div> 
        
    )
} 
