import {Navbar , Nav} from "react-bootstrap"
import img from "../../Assets/Images/index"
import "./NavBar.css"
import { Link } from "react-router-dom"
import {LogInContext} from "../../contexts/LogInContext/LogInContext"
import {useContext} from "react"
import {Button} from "react-bootstrap"

export const NavBarComp = () =>{
  const {autenticated, isAuthenticated}=useContext(LogInContext)

    return(
        <>
      <img className="mainLogo" src={img.mainLogo2} alt="logo"/> 
    <Navbar bg="dark" variant="dark">
  
    <Navbar.Brand href="#home"> </Navbar.Brand>
    <Nav className="mr-auto">{autenticated? <Button variant= "dark" onClick={()=>{localStorage.clear();   isAuthenticated()}}>Log Out</Button>:
    <Nav.Link as={Link} to={"/login"}>Log in</Nav.Link>}
    <Nav.Link as={Link} to={"/team"}>My Team</Nav.Link>
    <Nav.Link as={Link} to={"/seeker"}>Heroes Seeker</Nav.Link>
    </Nav>
  </Navbar>

  </>

)
  

}