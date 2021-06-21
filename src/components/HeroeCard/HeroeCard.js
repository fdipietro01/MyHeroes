import React, {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Link} from "react-router-dom"
import {Card, Button, ProgressBar} from "react-bootstrap"
import "./HeroeCard.css"



export const HeroeCard = ({heroe})=>{
    const {removeHeroe} = useContext(TeamContext)
    return(
        <>
            <Card style={{ width: '12rem'}}>
                <Card.Img className="cardImage" variant="top" src={heroe.image.url} />
                <Card.Body>
                <Card.Title className="cardTittle">{heroe.name}</Card.Title>
                <Card.Text className="cardStats">                
                <span>Intelligence:</span> <ProgressBar className="progresBar" label={heroe.powerstats.intelligence} now={heroe.powerstats.intelligence}/>
                <span>Strength:</span> <ProgressBar className="progresBar" label={heroe.powerstats.strength} now={heroe.powerstats.strength}/>
                <span>Speed:</span> <ProgressBar className="progresBar" label={heroe.powerstats.speed} now={heroe.powerstats.speed}/> 
                <span>Durability:</span> <ProgressBar className="progresBar" label={heroe.powerstats.durability} now={heroe.powerstats.durability}/>
                <span>Power:</span> <ProgressBar className="progresBar" label={heroe.powerstats.power} now={heroe.powerstats.power}/> 
                <span>Combat:</span> <ProgressBar className="progresBar" label={heroe.powerstats.combat} now={heroe.powerstats.combat}/>
                </Card.Text>
                <Button onClick={()=>removeHeroe(heroe)} variant="primary">borrar</Button>
                <Link to={`/detail-heroe/${heroe.id}`}><Button variant="primary">detail</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}