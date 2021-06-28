import React, {useState, useContext} from "react"
import {TeamContext} from "../../contexts/TeamContext/TeamContext"
import {Formik, Form, Field} from "formik"
import {Button, Container, Col, Row, Alert} from "react-bootstrap"
import axios from "axios"
import "./Seeker.css"
import { PreviewHeroCard } from "../../components/PreviewHeroCard/PreviewHeroCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../components/Loader/Loader"


export const Seeker = ()=>{

   const [searchResults, setSearchResults] = useState([])
   const {addMessage, resetAddMessage} = useContext(TeamContext)
   const [noResults, setNoResults] = useState()
   const [onLoad, setOnLoad] = useState(false)

    const catchHero = (data)=>{
        setOnLoad(true)
        resetAddMessage()
        const newData = data.search.toString().toLowerCase()
        const url = `https://www.superheroapi.com/api/10226309405912299/search/${newData}`
        /* axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'; */
        axios.get(url)

        .then((res)=>{
            if (res.status===200) {
                if(res.data.response ==="success"){
                    setSearchResults(res.data.results)
                    setNoResults()
                }
                else {
                    setSearchResults([])
                    console.log(res.data.error) 
                    setNoResults(`No heroe match with "${newData}"`)
                }
            }
        })
        .catch((error)=>{
            console.log(`aqui el error es ${error}`)
        })
        setOnLoad(false)
    }    
    
    const validateSearchBarInput=(value)=> {
        let error
        if (!value) {
          error = 'Required'
        } 
        return error
    }

    const deleteSearch =(e)=>{
        e.target.value=""
        setSearchResults([])
    }

  
    return(
    <>
        <Container fluid className="bkg2">
            <Row className="line">      
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
            {(searchResults.length>0 || noResults) ? <Button className="deleteSearchButton" onClick={(e)=>{ deleteSearch(e); resetForm(); resetAddMessage(); setNoResults()}} variant="dark">
                                           <FontAwesomeIcon className="icon" icon={faBan}/>
                                        </Button> : <Button className="hide deleteSearchButton"/> }
            </div>                            

           
            <Button className ="btnSearch" variant="dark" type="submit">Search now </Button>{' '} 
        </Form>
        )}
        </Formik>  
        {addMessage && addMessage.includes("Error")? 
        <Row><Alert className="alert2" variant="danger"> {addMessage}<Button variant="dark" className="alertBut" onClick={resetAddMessage}>X</Button></Alert></Row>:
        <Row><Alert className="alert2 hide">Error</Alert></Row>}
        
        {onLoad === true && <Row className="resultsGrid" ><Loader/></Row>}

        {noResults? <Row><Alert className="alert4">{noResults}...</Alert></Row>: (

        searchResults.length > 0 &&  <Row className="resultsGrid" >
        {searchResults.map((heroe) =><Col key={heroe.id}> <PreviewHeroCard heroe={heroe}/></Col>)}</Row>)}
            </Row>
        </Container>
    </>
)}