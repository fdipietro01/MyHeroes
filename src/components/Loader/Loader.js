import { Row, Spinner } from "react-bootstrap"

export const Loader = ()=>{
    return(
    <Row  className="detailCont2"> 
            <Spinner className="spinner "animation="border"/>
            <span className="loading">Loading...</span>
    </Row>
          )
}