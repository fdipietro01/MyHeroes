import {Navbar , Nav} from "react-bootstrap"
import img from "../../Assets/Images/index"
import "./NavBar.css"

export const NavBarComp = () =>{

    return(
        <>
      <img className="mainLogo" src={img.mainLogo2} alt="logo"/> 
    <Navbar bg="dark" variant="dark">
  
    <Navbar.Brand href="#home"> </Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href={"/login"}>Log in</Nav.Link>
    <Nav.Link href={"/team"}>My Team</Nav.Link>
    <Nav.Link href={"/seeker"}>Heroes Seeker</Nav.Link>
    </Nav>
  </Navbar>

  </>

)
  

}