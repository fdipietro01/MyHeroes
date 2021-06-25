import "./Login.css" 
import {useContext} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"
import axios from "axios"
import {Formik, Form, Field} from "formik"
import {Button, Container, Row, Col} from "react-bootstrap"


export const LogIn = ()=>{
    
    const {isAuthenticated} = useContext(LogInContext)

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
            .catch((error)=>{console.log(`El error es: ${error}`)})    
       }

    function validateEmail(value) {
        let error
        if (!value) {
          error = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address'
        }
        return error
    }

    function validatePassword(value) {
        let error
        if (!value) {
          error = 'Required'
        } else if (value.toString().length < 5){
        error = "Password too short. Min 6 characters"
        }
        return error
    }


    return(
        <div>
            <Container className="bkg" fluid>
                <Row className="logInTittle">¡Login to access to the most complete heroes collection!</Row>
                <Row>
                    <Col className="formCont">
                        <Formik
                initialValues ={{
                    email:"",
                    password:""
                }}
                onSubmit={ formData =>{
                    accessTokenApiCall(formData)
                    console.log(formData)
                }}> 
                
                {({errors, touched, isValidating})=>(
                <Form className="form">       
                    <label className="lab">Login</label>
                    <Field 
                        className="inp"
                        name="email" 
                        type="text" 
                        placeholder="Email address"
                        validate={validateEmail} 
                    />
                
                    <div className={`requiredHide ${errors.email && touched.email && "required"}`}>{errors.email && touched.email? errors.email: "required"}</div>
                
                    <label className="lab">Password</label>
                    <Field 
                        className="inp" 
                        name= "password" 
                        type="password" 
                        placeholder="Enter your password" 
                        validate={validatePassword}
                    />
                    <div className={`requiredHide ${errors.password && touched.password && "required"}`}>{errors.password && touched.password? errors.password: "required"}</div>
                    <Button className= "but" variant="dark" type="submit">Login</Button>{' '}     
                    </Form>
                )} 
                </Formik>      
                    </Col>
                </Row>
            </Container>
        </div>
    )    
}