import "./Login.css" 
import {useContext, useState} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"
import axios from "axios"
import {Formik, Form, Field} from "formik"
import {Button, Container, Row, Col, Alert} from "react-bootstrap"


export const LogIn = ()=>{
    
    const {isAuthenticated} = useContext(LogInContext)
    const [errorMail, setErrorMail] = useState()
    const [errorPass, setErrorPass] = useState()
    const [wrongCredentialMsg, setWronCredentialMsg] =useState() 

    const myStorage= (value)=>{window.localStorage.setItem("token", value)};

    const accessTokenApiCall =(data)=>{
        
            axios({
                method: "post", 
                url:"http://challenge-react.alkemy.org",
                data:{
                    email: data.email,
                    password: data.password
                }
            })
            .then(res=>{
                const {token} = res.data
                    if (token) {
                        myStorage(token)
                        isAuthenticated()
                }
            })
            .catch((error)=>{setWronCredentialMsg(`¡Wrong credentials, try again!`)})    
       }

    function validateEmail(value) {
        let error
        if (!value || value ==="") {
          error = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address'
        }
        return error
    }

    function validatePassword(value) {
        let error
        if (!value | value ==="") {
          error = 'Required'
        } else if (value.toString().length < 5){
        error = "Too short. Min 6 characters"
        }
        return error
    }

    function pointErrors(res){
       
        res.email? setErrorMail(res.email) : setErrorMail()
        res.password? setErrorPass(res.password) : setErrorPass()
    }



    return(

            <Container className="bkg" fluid>
                <Row className="logInTittle">¡Login to access to the most complete heroes collection!</Row>
                <Row>
                    <Col className="formCont">
                        <Formik
                initialValues ={
                    {
                    email:"",
                    password:""
                    }
                }
                onSubmit={ formData =>{
                    accessTokenApiCall(formData)
                    console.log(formData)
                    } 
                }> 
                
                {({errors, touched, validateForm})=>(
                <Form className="form">       
                    <label className="lab">Login</label>
                    <Field 
                        className="inp"
                        name="email" 
                        type="text" 
                        placeholder="Email address"
                        validate={validateEmail}
                        
                    />
                <div className={`requiredHide ${errorMail && "required"}`}> {errorMail? errorMail : "No error found"} </div>
                   
                
                    <label className="lab">Password</label>
                    <Field 
                        className="inp" 
                        name= "password" 
                        type="password" 
                        placeholder="Enter your password" 
                        validate={validatePassword}
                        
                    />
                    <div className={`requiredHide ${errorPass && "required"}`}> {errorPass? errorPass : "No error found"} </div>
                    
                    <Button className="but" onClick={()=>validateForm().then((res) => pointErrors(res))} variant="dark" type="submit">Login</Button>{' '}

                       {wrongCredentialMsg? 
                    <Row><Alert className="alert3" variant="danger"> {wrongCredentialMsg}</Alert></Row>:
                    <Row><Alert className="alert3 hide">Hide Error</Alert></Row>}     
                    </Form>
                )} 
                </Formik>      
                    </Col>
                </Row>
            </Container>
    )    
}