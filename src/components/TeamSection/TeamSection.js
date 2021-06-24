import React, {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {NoPickHeroCard} from "../NoPickHeroCard/NoPickHeroCard"
import {HeroeCard} from "../HeroeCard/HeroeCard"
import {Container, Row, Col} from "react-bootstrap"
import "./TeamSection.css"

export const TeamSection = ()=>{
    const {selectedHeroes} = useContext(TeamContext)
    

    const noHeroesinTeam = ()=>{
        return selectedHeroes.length === 0
    }

    const createEmptyPlaces = ()=>{
        const emptyPlaces = 6-selectedHeroes.length
        let emptyCards = []
        for(let x = 0; x < emptyPlaces; x++){
         emptyCards.push(x)
        }
        return emptyCards
    }

    return (
        <Container className="teamSectionBkg" fluid>
            <Row md={1}>
                <Col>
                    {noHeroesinTeam() ? (
                        <Container fluid>
                            <Row className="cardGrid">
                                <Col className="card1"><NoPickHeroCard/></Col>
                                <Col className="card1"><NoPickHeroCard/></Col>
                                <Col className="card1"><NoPickHeroCard/></Col>
                                <Col className="card1"><NoPickHeroCard/></Col>
                                <Col className="card1"><NoPickHeroCard/></Col>
                                <Col className="card1"><NoPickHeroCard/></Col>
                            </Row>
                        </Container>) :
             
                        <Container fluid>
                            <Row className="cardGrid">
                                {selectedHeroes.map((heroe)=> <Col className="card1" key={heroe.id}><HeroeCard heroe={heroe}/></Col> )}
                                {createEmptyPlaces().map((card, idx)=><Col key={idx}><NoPickHeroCard/></Col>)}
                            </Row>
                        </Container>
        }
                </Col>
            </Row>
        </Container>
    )
}