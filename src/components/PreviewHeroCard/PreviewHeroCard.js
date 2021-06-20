 
import {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"

export const PreviewHeroCard = ({heroe, idx, powerStatsAverages})=>{
    const {addHeroe} = useContext(TeamContext)
    
    return(
    <div> 
                <img className="previewPhoto" src={heroe.image.url} alt="heroePreview"/> <span> {heroe.name}</span> 
                <div>PowerAverage: 
                    {powerStatsAverages !== undefined && <span>{powerStatsAverages[idx]}</span>}
                </div>
                <button onClick={()=>addHeroe(heroe)}>add+</button>
                <button onClick={()=>console.log("hola")}>detail</button>
    </div>
    )
}