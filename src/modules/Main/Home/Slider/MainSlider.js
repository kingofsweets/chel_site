import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {slideritems} from './slider/slider'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
class MainSlider extends React.Component{

    render(){
        return(
            <>
                <Carousel>
                    {
                        slideritems.map((i) => (
                            <Carousel.Item>
                                <img className = 'd-block w-100' src={i.src} alt="Так"/>
                                <Carousel.Caption>
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                    <Button variant="light"><Link className = 'ad' to = {i.to}>{i.buttontext}</Link></Button>
                                </Carousel.Caption>
                            </Carousel.Item>

                        ))
                    }
                </Carousel>
            </>
        )
    }
}

export default MainSlider;