import {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faDumbbell, faBatteryHalf, faBolt, faTachometerAlt, faFistRaised, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import "./HeroeStats.css"

export const HeroeStats = ()=>{
    const {totalStats, teamNature} = useContext(TeamContext)

    const setNatureLogo = ()=>{
      console.log(teamNature)
      switch(teamNature){
        case "intelligence": return  <FontAwesomeIcon className="statMyIcon int"icon={faBrain}/>;
        break;
        case "power": return  <FontAwesomeIcon className="statMyIcon pow"icon={faBolt}/>;
        break;
        case "speed": return  <FontAwesomeIcon className="statMyIcon spe"icon={faTachometerAlt}/>;
        break;
        case "strength": return  <FontAwesomeIcon className="statMyIcon str"icon={faDumbbell}/>;
        break;
        case "durability": return  <FontAwesomeIcon className="statMyIcon dur"icon={faBatteryHalf}/>;
        break;
        case "combat": return  <FontAwesomeIcon className="statMyIcon com"icon={faFistRaised}/>;
      }
    }
    
    return (
    <>
    <Container fluid className="sectionContain">
    <div className="statsContain">
      <Row className="totalstatsTittle">Team Picked Stats</Row>
  
      <Row>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faFistRaised}/> {` Combat: ${totalStats.combat}`}</Col>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faBatteryHalf}/>{` Durability: ${totalStats.durability}`}</Col>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faBrain}/>{` Intelligence: ${totalStats.intelligence}`}</Col>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faBolt}/>{`Power: ${totalStats.power}`}</Col>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faTachometerAlt}/>{` Speed: ${totalStats.speed}`}</Col>
        <Col className="stat"><FontAwesomeIcon className="statIcon"icon={faDumbbell}/>{` Strength: ${totalStats.strength}`}</Col>
      </Row>
      
    </div>
    <Row className="mayorStat"> Top skill: {teamNature ===""? <FontAwesomeIcon className="statMyIcon"icon={faQuestionCircle}/> : (setNatureLogo())}</Row>
    </Container>
    </>
    )
}