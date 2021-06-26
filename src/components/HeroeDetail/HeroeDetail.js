import {useEffect, useState} from "react"
import axios from "axios"
import { Container, Image, Row, Col } from "react-bootstrap"
import "./HeroeDetail.css"


export const HeroeDetail = ({id})=>{
    const [heroe, setHeroe]= useState()
    console.log(id)

    useEffect(()=>{catchHeroById(id)},[id])

    const catchHeroById = (id)=>{
        if(id!== undefined){
            const newId = id.toString()
            const url = `https://www.superheroapi.com/api/10226309405912299/${newId}`
            console.log (url.toString())
       
            axios.get(url)
            .then((res)=>{
                if(res.data.response ==="success"){
                    setHeroe(res.data)
                }
                else {
                    console.log(res.error) 
                }
            }) 
            .catch((error)=>{
                console.log(`aqui el error es ${error}`)
            })
        }
    }
    console.log(heroe)

    return(
        <>
        <Container className="bkgDetail">
            {heroe &&(
                <>
                    <Row>
                    <Col>
                        <Image className="detailImg" src={heroe.image.url} fluid/>
                    </Col>
                    
                    <Col>
                        <p><span>Name: </span>{heroe.name}</p>
                        <p><span>Place of work: </span>{heroe.work.base}</p>
                        <p><span>Eye-Color: </span>{heroe.appearance["eye-color"]}</p>
                        <p><span>Height: </span>{heroe.appearance.height[1]}</p>
                        <p><span>Height: </span>{heroe.appearance.weight[1]}</p>
                        <p>Alias:{heroe.biography.aliases.map((alias,idx)=> <span key={idx}> {alias}/</span>)}</p>
                    </Col>
                    </Row>
                   
                </>
            )}
        </Container>
        </>
    )
}