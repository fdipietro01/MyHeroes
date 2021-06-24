import React, { useState } from "react"
import { NavBarComp } from "../../components/NavBar/NavBar"
import {Formik, Form, Field} from "formik"
import {Button, Container, Col, Row} from "react-bootstrap"
import axios from "axios"
import "./Seeker.css"
import { PreviewHeroCard } from "../../components/PreviewHeroCard/PreviewHeroCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


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
    
    const validateSearchBarInput=(value)=> {
        let error
        if (!value) {
          error = 'Required'
        } 
        return error
    }

    const deleteSearch =(e)=>{
        console.log(e.target.value)
        e.target.value=""
        setSearchResults([])
    }

  
    return(
    <>
        <NavBarComp/> 
        <Container>
            <Row>
                <Col>
                       
                    <Formik
            initialValues ={{
            search:"",
        
        }}
        onSubmit={formData =>{
            catchHero(formData)
        }}> 
    
        {({errors, touched, resetForm})=>(

        <Form className="formSeeker">       
            <div className="searchBar">
            <Field
                onFocus={e=>e.target.placeholder=""} 
                onBlur={e=>e.target.placeholder="Look up for your heroes"} 
                className="seekerInp"
                name="search" 
                type="text" 
                placeholder="Look up for your heroes"
                validate={validateSearchBarInput} 
            />
            {searchResults.length>0 && <Button className="deleteSearchButton" onClick={(e)=>{ deleteSearch(e); resetForm()}} variant="dark">
                                           <FontAwesomeIcon className="icon" icon={faBan}/>
                                        </Button>}
            </div>                            

            {errors.search && touched.search? <div>{errors.search}</div> : null}
            <Button variant="dark" type="submit">Search now </Button>{' '} 
        </Form>
        )}
        </Formik>  

                    {searchResults.length > 0 &&  <Row className="resultsGrid" >{searchResults.map((heroe) =><Col key={heroe.id}> 
                    <PreviewHeroCard heroe={heroe}/></Col>
                    )}</Row>}
                </Col>
            </Row>
        </Container>
    </>
)}