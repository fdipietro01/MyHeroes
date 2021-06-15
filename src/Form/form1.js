import "./form.css" 
import {useFormik} from "formik"
import axios from "axios"
import * as Yup from "yup"


export const Form1 = ()=>{

    let myStorage= (value)=>{window.localStorage.setItem("token", value)};

    const {handleSubmit, handleChange, handleBlur, errors, values, touched} = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        onSubmit: (formData)=>{
         
        console.log(formData)
        try{
        axios({
            method: "post", 
            url:"http://challenge-react.alkemy.org",
            data:{
                email: formData.email,
                password: formData.password
            }
        })
        .then(res=>{console.log(res);

            if (res.status===200) {
                myStorage(res.data.token)
                console.log(window.localStorage.getItem("token"))
            }
            })
        }
        catch(error){
            error && console.log(`El error es: ${error}`)
        }
        },
        
        validationSchema: Yup.object({
            email: Yup.string().email().required(), 
            password: Yup.string().required()
        })
    })

    console.log(errors)

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                
                
                <label className="lab">Login</label>
                <input 
                className="inp"
                name="email" 
                type="text" 
                placeholder="Enter your email address" 
                value={values.email}
                onClick={(e)=>e.target.placeholder=""}
                onBlur={handleBlur}  
                onChange={handleChange}
                error={errors.email}/>

                {errors.mail && touched.email? <div>{errors.email}</div> : null}
               
             
                <label className="lab">Password</label>
                <input 
                className="inp" 
                name= "password" 
                type="password" 
                placeholder="Enter your password" 
                value={values.password}
                onClick={(e)=>e.target.placeholder=""} 
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password}/>
                

                <button className="but" type="submit">Log in</button>
            </form>
        </div>
    )    
}