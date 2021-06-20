import React, {useState} from "react"

export const TeamContext = React.createContext({})

export const TeamSelection = ({children})=>{

    const [selectedHeroes, setSelectedHeroes] = useState([])

    const isIncludInTeam = (heroe)=>{
        return selectedHeroes.includes(heroe)
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
        return `${heroe.name} was removed from your team`
    }
    console.log(selectedHeroes)


    return (
        <TeamContext.Provider value={{selectedHeroes, addHeroe, removeHeroe}}>
            {children}
        </TeamContext.Provider>
    )
}