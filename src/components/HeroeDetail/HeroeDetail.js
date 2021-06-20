import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"


export const HeroeDetail = ()=>{
    const {id} = useParams()
    const [heroe, setHeroe]= useState({})

    useEffect(()=>{catchHeroById(id)},[])
    const catchHeroById = (id)=>{
        
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
    console.log(heroe)

    return(
        <>
            <div>{heroe.name}</div> 
        </>
    )
}