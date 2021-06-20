import {NoPickHeroCard} from "../NoPickHeroCard/NoPickHeroCard"
import "./TeamSection.css"


export const TeamSection = ()=>{
    return (
        <div>
            <div></div>
            <div className="cardGrid">
            <NoPickHeroCard/>
            <NoPickHeroCard/>
            <NoPickHeroCard/>
            <NoPickHeroCard/>
            <NoPickHeroCard/>
            <NoPickHeroCard/>
            </div>
        </div>
    )
}