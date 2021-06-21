import React, {useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {NoPickHeroCard} from "../NoPickHeroCard/NoPickHeroCard"
import {HeroeCard} from "../HeroeCard/HeroeCard"
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
        <div>
            {noHeroesinTeam() ? (
            <div className="cardGrid">
                <NoPickHeroCard/>
                <NoPickHeroCard/>
                <NoPickHeroCard/>
                <NoPickHeroCard/>
                <NoPickHeroCard/>
                <NoPickHeroCard/>
            </div>) :
            <div className="cardGrid">
                {selectedHeroes.map((heroe)=> <HeroeCard key={heroe.id} heroe={heroe}/>)}
                {createEmptyPlaces().map((card, idx)=><NoPickHeroCard key={idx}/>)}
            </div>
        }
        </div>
    )
}