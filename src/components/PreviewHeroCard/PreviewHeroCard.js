import {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Link} from "react-router-dom"
import { Container, Row} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import "./PreviewHeroCard.css"

export const PreviewHeroCard = ({heroe})=>{
    const {addHeroe, isIncludInTeam, removeHeroe} = useContext(TeamContext)

    return(
  
        <Row className="resultHeroesRow">
                <div className="heroeResultCard">
                    <img className="previewPhoto" src={heroe.image.url} alt="heroePreview"/>   
                    <div className="previewHeroeInfo">
                        <p className="heroeResultCardTittle"> {heroe.name}</p>
                        <div className="heroeResultCardTittlebuttons">
                            {isIncludInTeam(heroe.id) === false? 
                                <button className="cardButton2" onClick={()=>addHeroe(heroe)}> <FontAwesomeIcon className="icon2" icon={faPlusCircle}/></button> :
                                                  
                                <button className="cardButton2" onClick={()=>removeHeroe(heroe)}><FontAwesomeIcon className="icon2" icon={faMinusCircle}/></button> }
                                                  
                              
                                <button className=" cardButton2">  <Link className="desactivateLink" to={`/detail-heroe/${heroe.id}`}> <FontAwesomeIcon className="icon2" icon={faInfoCircle}/>  </Link></button>
                               
                            
                        </div>
                    </div>
                </div> 
               
        </Row>

    )
}