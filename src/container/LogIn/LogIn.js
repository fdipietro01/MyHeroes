import "./Login.css" 
import {useContext} from "react"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"
import axios from "axios"
import {Formik, Form, Field} from "formik"
import {NavBarComp} from "../../components/NavBar/NavBar"
import {Button} from "react-bootstrap"


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

    console.log(autenticated)

    return(
        <div>
            {autenticated === false && window.alert("Bad Loguin")}
            <NavBarComp/>
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
                        placeholder="Log in"
                        validate={validateEmail} 
                    />
                
                    {errors.email && touched.email? <div>{errors.email}</div> : null}
                
                    <label className="lab">Password</label>
                    <Field 
                        className="inp" 
                        name= "password" 
                        type="password" 
                        placeholder="Enter your password" 
                        validate={validatePassword}
                    />
                    {errors.password && touched.password? <div>{errors.password}</div> : null}
                    <Button variant="dark" type="submit">Log In</Button>{' '}     
                    </Form>
                )} 
                </Formik>      
                     
        </div>
    )    
}