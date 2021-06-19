import React, { useState } from "react"
import { NavBarComp } from "../../components/NavBar/NavBar"
import {Formik, Form, Field} from "formik"
import {Button} from "react-bootstrap"
import axios from "axios"
import { useEffect } from "react"
import "./Seeker.css"


export const Seeker = ()=>{

   const [searchResults, setSearchResults] = useState()
   const [powerStatsAverages, setPowerStatsAverage] = useState()

    
   useEffect(()=>{
    console.log(searchResults)
    setHeroesAverageStats()
       },[searchResults])
  
    
    
    const catchHero = (data)=>{
        const newData = data.search.toString().toLowerCase()
        const url = `https://www.superheroapi.com/api/10226309405912299/search/${newData}`
        console.log (url.toString())
        try{
        axios.get(url)
        .then((res)=>{
            if (res.status===200) {
                if(res.data.response ==="success"){
                    setSearchResults(res.data.results)}
                else {
                    console.log(res.data.error) 
                    }
            }
        }
        ,(error)=>{console.log(`el error es ${error}`)})
        }
        catch(error){
            error && console.log(`aqui el error es ${error}`)
        }
    }

    const setHeroesAverageStats = ()=> {
        if (searchResults !== undefined) {
            const resultsStats = searchResults.map(heroe=> (Object.values(heroe.powerstats)))
            console.log (resultsStats)
            const averages = []
            
            for ( let x = 0; x<resultsStats.length; x++ ){
                let acumulated = 0
                for (let y = 0; y<resultsStats[x].length; y++){
                    if(resultsStats[x][y] === "null") resultsStats[x][y] = 0 
                    acumulated = acumulated + parseInt(resultsStats[x][y])
                }
            averages[x]=Math.round(acumulated/6)
            console.log(averages)
            }
            setPowerStatsAverage(averages)
        }
    } 
    
console.log(powerStatsAverages)
    
    function validateSearchBarInput(value) {
        let error
        if (!value) {
          error = 'Required'
        } 
        return error
    }
  
    return(
    <>
        <NavBarComp/>    
        <Formik
            initialValues ={{
            search:"",
        
        }}
        onSubmit={formData =>{
            catchHero(formData)
        }}> 
    
        {({errors, touched})=>(

        <Form className="form">       
            <Field 
                className="inp"
                name="search" 
                type="text" 
                placeholder="Look up for your heroes"
                validate={validateSearchBarInput} 
            />
    
        {errors.search && touched.search? <div>{errors.search}</div> : null}
        <Button variant="dark" type="submit">Search</Button>{' '} 
        </Form>
        )}
        </Formik>  

            {searchResults !== undefined?  <div>{searchResults.map((heroe, idx) => 
            <div key={heroe.id}> 
                <img className="previewPhoto" src={heroe.image.url} alt="heroePreview"/> <span> {heroe.name}</span> 
                <div>PowerAverage: 
                    {powerStatsAverages !== undefined && <span>{powerStatsAverages[idx]}</span>}
                </div>
            </div>)}</div> : null}
    </>
)}