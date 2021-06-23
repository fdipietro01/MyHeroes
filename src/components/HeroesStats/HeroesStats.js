import {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faDumbbell, faBatteryHalf, faBolt, faTachometerAlt, faFistRaised } from '@fortawesome/free-solid-svg-icons'
import "./HeroeStats.css"

export const HeroeStats = ()=>{
    const {totalStats} = useContext(TeamContext)
    
    return (
    <>
    <Container fluid className="sectionContain">
    <div class="statsContain">
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
    </Container>
    </>
    )
}