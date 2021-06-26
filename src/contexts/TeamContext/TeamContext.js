import React, {useState, useEffect} from "react"

export const TeamContext = React.createContext({})

export const TeamSelection = ({children})=>{

    const [selectedHeroes, setSelectedHeroes] = useState([])
    const [totalStats, setTotalStats] = useState({})
    const [teamNature, setTeamNature] = useState("")
    const [addMessage, setAddMessage] = useState()

    useEffect(()=>{
        calculateTotalStats()
        estimateNatureTeam()
    },[selectedHeroes])

    useEffect(()=>{
        estimateNatureTeam()
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

    const resetAddMessage=()=>{
        setAddMessage()
    }

    const addHeroe=(heroe)=>{     
        if(selectedHeroes.length < 6){
                const goodHeroes = selectedHeroes.filter(x => (x.biography.alignment === "good"))
                const badHeroes = selectedHeroes.filter(x => (x.biography.alignment === "bad"))
                const neutralHeroes = selectedHeroes.filter(x => (x.biography.alignment === "neutral"))
                if(heroe.biography.alignment === "good"){
                            if(goodHeroes.length < 3){
                                setSelectedHeroes([...selectedHeroes, heroe])
                                setAddMessage(`${heroe.name} Added to your team`)
                            }
                            else{
                                setAddMessage("Error. Too many good Heroes, considere add some evil ones")
                            }
                }    
                if(heroe.biography.alignment === "bad"){
                            if(badHeroes.length < 3){
                                setSelectedHeroes([...selectedHeroes, heroe])
                                setAddMessage(`${heroe.name} Added to your team`)
                            }
                            else{
                                setAddMessage("Error. Too many bad Heroes, considere add some good ones")
                            }
                }
                if(heroe.biography.alignment === "neutral"){
                    if(neutralHeroes.length < 3){
                        setSelectedHeroes([...selectedHeroes, heroe])
                        setAddMessage(`${heroe.name} Added to your team`)
                    }
                    else{
                        setAddMessage("Error. Too many neutral Heroes, considere add some good and bad ones");
                    }
                }
            }     
        else {
            setAddMessage("Error. Your team is complete right now")
            
        }  
    }
    const removeHeroe=(heroe)=>{
        setSelectedHeroes(selectedHeroes.filter(x => x.id !== heroe.id))
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
        <TeamContext.Provider value={{selectedHeroes, totalStats, addHeroe, removeHeroe, isIncludInTeam, checkNumber, teamNature, addMessage, resetAddMessage}}>
            {children}
        </TeamContext.Provider>
    )
}