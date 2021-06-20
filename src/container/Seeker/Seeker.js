import React, { useState } from "react"
import { NavBarComp } from "../../components/NavBar/NavBar"
import {Formik, Form, Field} from "formik"
import {Button} from "react-bootstrap"
import axios from "axios"
import "./Seeker.css"
import { PreviewHeroCard } from "../../components/PreviewHeroCard/PreviewHeroCard"


export const Seeker = ()=>{

   const [searchResults, setSearchResults] = useState([])

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

            {searchResults.length > 0 && <div>{searchResults.map((heroe, idx) => 
            <PreviewHeroCard key={heroe.id} heroe={heroe} idx={idx}/>
            )}</div>}
    </>
)}