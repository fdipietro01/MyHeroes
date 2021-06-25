import {useEffect, useState} from "react"
import axios from "axios"


export const HeroeDetail = ({id})=>{
    const [heroe, setHeroe]= useState({})
    console.log({id})


    useEffect(()=>{catchHeroById(id)},[id])
    const catchHeroById = (id)=>{
        if(id!== undefined){
        const newId = id.toString()
        const url = `https://www.superheroapi.com/api/10226309405912299/${newId}`
        console.log (url.toString())
        try{
        axios.get(url)
        .then((res)=>{
            if (res.status===200) {
                if(res.data.response ==="success"){
                    setHeroe(res.data)}
                else {
                    console.log(res.error) 
                    }
            }
        }
        ,(error)=>{console.log(`el error es ${error}`)})
        }
        catch(error){
            error && console.log(`aqui el error es ${error}`)
        }
    }
}
    console.log(heroe)

    return(
        <>
            <div>{heroe.name}</div> 
        </>
    )
}