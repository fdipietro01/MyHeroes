import React, {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Link} from "react-router-dom"
import {Card, Button, ProgressBar} from "react-bootstrap"
import "./HeroeCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faDumbbell, faBatteryHalf, faBolt, faTachometerAlt, faFistRaised, faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const HeroeCard = ({heroe})=>{
    const {removeHeroe, checkNumber} = useContext(TeamContext)

    return(
        <>
            
            <Card className="heroCard">
                <Card.Img className="cardImage" variant="top" src={heroe.image.url} />
                <Card.Body className="cardBody" >
                    <Card.Title className="cardTittle">{heroe.name}</Card.Title>

                    <Card.Text className="cardStats">                
                        <p className="statContain">                    
                            <FontAwesomeIcon className="cardIcon" icon={faFistRaised}/>
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.combat)} now={heroe.powerstats.combat}/>
                        </p>
                        
                        <p className="statContain">
                            <FontAwesomeIcon className="cardIcon" icon={faBatteryHalf}/> 
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.durability)} now={heroe.powerstats.durability}/>
                        </p>
                            
                        <p className="statContain">
                            <FontAwesomeIcon className="cardIcon" icon={faBrain}/>
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.intelligence)} now={heroe.powerstats.intelligence}/>
                        </p>

                        <p className="statContain">
                            <FontAwesomeIcon className="cardIcon" icon={faBolt}/>
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.power)} now={heroe.powerstats.power}/> 
                        </p>
                        
                        <p className="statContain">
                            <FontAwesomeIcon className="cardIcon" icon={faTachometerAlt}/>
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.speed)} now={heroe.powerstats.speed}/>
                        </p>
                        <p className="statContain">
                            <FontAwesomeIcon className="cardIcon" icon={faDumbbell}/>
                            <ProgressBar variant= "dark" className="progresBar" label={checkNumber(heroe.powerstats.strength)} now={heroe.powerstats.strength}/>
                        </p>
                    </Card.Text>

                <div className="buttonsKeypad">
                    <Link className="link "to={`/detail-heroe/${heroe.id}`}>
                        <Button className="cardButton"  variant="dark">
                            <FontAwesomeIcon className="icon" icon={faInfoCircle}/>
                        </Button>
                    </Link>
                    <Button className="cardButton" onClick={()=>removeHeroe(heroe)} variant="dark">
                        <FontAwesomeIcon className= "icon" icon={faTrashAlt}/>
                    </Button>
                </div>    
            </Card.Body>
        </Card>
        </>
    )
}