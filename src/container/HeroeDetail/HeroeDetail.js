import {useEffect, useState} from "react"
import axios from "axios"
import { Container, Image, Row, Col, Button} from "react-bootstrap"
import {Loader} from "../../components/Loader/Loader"
import "./HeroeDetail.css"
import {Link} from "react-router-dom"


export const HeroeDetail = ({id})=>{
    const [heroe, setHeroe]= useState()
    console.log(id)

    useEffect(()=>{catchHeroById(id)},[id])

    const catchHeroById = (id)=>{
        if(id!== undefined){
            const newId = id.toString()
            const url = `https://www.superheroapi.com/api/10226309405912299/${newId}`
            console.log (url.toString())
       /* axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'; */
            axios.get(url)
            .then((res)=>{
                if(res.data.response ==="success"){
                    setHeroe(res.data)}
                else {
                    console.log(res.data.error) 
                    }
            })

            .catch((error)=>{
                error && console.log(`Error en details es ${error}`)
            })
        }
    }

    return(
        <>
        <Container className="bkgDetail" fluid>
            {heroe? (
                    <Row className="detailCont">
                        <Col className="imgCont">
                            <Image className="detailImg" src={heroe.image.url} fluid/>
                        </Col>
                    
                        <Row className="dataDetail">
                            <div>
                                <p className="field"><span className="detailLabel">Name: </span>{heroe.name}</p>
                                <p className="field"><span className="detailLabel">Place of work: </span>{heroe.work.base}</p>
                                <p className="field"><span className="detailLabel">Eye-Color: </span>{heroe.appearance["eye-color"]}</p>
                                <p className="field"><span className="detailLabel">Height: </span>{heroe.appearance.height[1]}</p>
                                <p className="field"><span className="detailLabel">Weight: </span>{heroe.appearance.weight[1]}</p>
                                <p className="field"><span className="detailLabel">Alias:</span>{heroe.biography.aliases.map((alias,idx)=> <span key={idx}> {alias}/</span>)}</p>
                                <p className="field"><span className="detailLabel">Alignment: </span>{heroe.biography.alignment}</p>
                                <Link to={'/team'}>
                                    <Button className="linksBut" variant="dark">Go to your Team </Button>
                                </Link>
                                <Link to={'/seeker'}>
                                    <Button className="linksBut" variant="dark">Find More Heroes</Button>
                                </Link>
                            </div>
                        </Row>                        
                                
                    </Row>
            ): <Loader/>}
        </Container>
        </>
    )
}