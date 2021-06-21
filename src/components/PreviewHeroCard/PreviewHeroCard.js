import {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Link} from "react-router-dom"

export const PreviewHeroCard = ({heroe})=>{
    const {addHeroe, isIncludInTeam, removeHeroe} = useContext(TeamContext)

    return(
    <div> 
                <img className="previewPhoto" src={heroe.image.url} alt="heroePreview"/> <span> {heroe.name}</span> 
                {isIncludInTeam(heroe.id) === false? <button onClick={()=>addHeroe(heroe)}>add+</button> :
                                                  <button onClick={()=>removeHeroe(heroe)}>remove-</button> }
                <Link to={`/detail-heroe/${heroe.id}`}><div>detail</div></Link>
    </div>
    )
}