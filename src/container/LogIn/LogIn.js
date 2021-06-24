import "./Login.css" 
import {useContext} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"
import axios from "axios"
import {Formik, Form, Field} from "formik"
import {NavBarComp} from "../../components/NavBar/NavBar"
import {Button, Container, Row, Col} from "react-bootstrap"


export const LogIn = ()=>{
    
    const {autenticated} = useContext(LogInContext)
    const {setAutenticated} = useContext(LogInContext)

    const myStorage= (value)=>{window.localStorage.setItem("token", value)};

    const accessTokenApiCall =(data)=>{
        try{
            axios({
                method: "post", 
                url:"http://challenge-react.alkemy.org",
                data:{
                    email: data.email,
                    password: data.password
                }
            })
            .then(res=>{
                if (res.status===200) {
                    if(res.response ==="success"){
                        myStorage(res.data.token)
                        console.log(window.localStorage.getItem("token"))
                    window.localStorage.getItem("token") !== null && setAutenticated(true)
                    }
                }
            }, (error)=>{
                console.log(`algo falló ${error}`)
                setAutenticated(false)
            })
        }
        catch(error){
            error && console.log(`El error es: ${error}`)
        }
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
            {autenticated === false && window.alert("Bad Loguin")}
            <NavBarComp/>
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