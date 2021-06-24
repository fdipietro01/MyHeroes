import React, {useState, useEffect} from "react"

export const TeamContext = React.createContext({})

export const TeamSelection = ({children})=>{

    const [selectedHeroes, setSelectedHeroes] = useState([])
    const [totalStats, setTotalStats] = useState({})
    const [teamNature, setTeamNature] = useState("")

    useEffect(()=>{
        calculateTotalStats()
        estimateNatureTeam()
        console.log(teamNature)
    },[selectedHeroes])

    useEffect(()=>{
        estimateNatureTeam()
        console.log(teamNature)
    },[totalStats])

    const isIncludInTeam = (id)=>{
        let isInclude = false     
        selectedHeroes.map(heroe=>{
            if(heroe.id === id){
            isInclude = true
            }
        })
            return isInclude
    }

    const addHeroe=(heroe)=>{
        let addResult = ""        
        if(selectedHeroes.length < 6){
            if(isIncludInTeam(heroe)){ 
                console.log("heroe existente")
                addResult =`${heroe.name} is already part of your team`
                }
            else{
                console.log("heroe no incluido en equipo aún")
                const goodHeroes = selectedHeroes.filter(x => (x.biography.alignment === "good"))
                const badHeroes = selectedHeroes.filter(x => (x.biography.alignment === "bad"))
                const neutralHeroes = selectedHeroes.filter(x => (x.biography.alignment === "neutral"))
                if(heroe.biography.alignment === "good"){
                            if(goodHeroes.length < 3){
                                setSelectedHeroes([...selectedHeroes, heroe])
                                console.log("heroe bueno agragado")
                                addResult= `${heroe.name} Added to your team`
                            }
                            else{
                                addResult= "Too many good Heroes, considere add some evil ones"
                                console.log("heroe bueno denegado")
                            }
                }    
                if(heroe.biography.alignment === "bad"){
                            if(badHeroes.length < 3){
                                setSelectedHeroes([...selectedHeroes, heroe])
                                console.log("heroe malo agragado")
                                addResult= `${heroe.name} Added to your team`
                            }
                            else{
                                addResult= "Too many bad Heroes, considere add some good ones"
                                console.log("heroe malo denegado")
                            }
                }
                if(heroe.biography.alignment === "neutral"){
                    if(neutralHeroes.length < 3){
                        setSelectedHeroes([...selectedHeroes, heroe])
                        console.log("heroe neutral agragado")
                        addResult= `${heroe.name} Added to your team`
                    }
                    else{
                        addResult= "Too many neutral Heroes, considere add some good and bad ones"
                        console.log("heroe neutral denegado")
                    }
        }
            } 
                }    
        else {
            addResult="Your team is complete right now"
            console.log("equipo completo")
        }  
        return addResult
    }

    const removeHeroe=(heroe)=>{
        setSelectedHeroes(selectedHeroes.filter(x => x !== heroe))
        console.log(`${heroe.name} was removed from your team`) 
    }

    const checkNumber = (data)=>{
        if(data === "null") return 0; else return Number(data) 
    }

    const calculateTotalStats = ()=>{
        let totals = {combat: 0, durability: 0, intelligence:0, power: 0, speed: 0, strength:0}
        for (let heroe of selectedHeroes){
            totals.combat = totals.combat + checkNumber(heroe.powerstats.combat)
            totals.durability = totals.durability + checkNumber(heroe.powerstats.durability)
            totals.intelligence = totals.intelligence + checkNumber(heroe.powerstats.intelligence)
            totals.power = totals.power + checkNumber(heroe.powerstats.power) 
            totals.speed = totals.speed + checkNumber(heroe.powerstats.speed)
            totals.strength = totals.strength + checkNumber(heroe.powerstats.strength)
        }
        setTotalStats(totals)
    }
    
    const estimateNatureTeam = () =>{
        if(selectedHeroes !== []){
            let max = 0;
            let mostAtrribute = ""
            for ( let atrribute in totalStats ) {
                if (max < totalStats[atrribute]){
                    max = totalStats[atrribute]
                    mostAtrribute = atrribute
                }
            }
        setTeamNature(mostAtrribute)
        }
        else{
            setTeamNature("")
        }
    }

    return (
        <TeamContext.Provider value={{selectedHeroes, totalStats, addHeroe, removeHeroe, isIncludInTeam, checkNumber, teamNature}}>
            {children}
        </TeamContext.Provider>
    )
}