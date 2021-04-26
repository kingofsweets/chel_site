import React from 'react'
import './news.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import {feat_news} from './content/test-news'
import { Link } from 'react-router-dom'
class NewsMain extends React.Component{
    render(){
        return(
        <div className = 'news-main'>
            <h1>Важные новости</h1>
            <div className = 'feat-news'>
            <CardGroup>
                {
                    feat_news.map((i) => (
                        <Card>
                            <Card.Img variant="top" src={i.src + '/100px160'} />
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>{i.desc}</Card.Text>
                            <Button variant="dark"><Link number = {feat_news.indexOf(i)} to = {'/news/' + String(feat_news.indexOf(i))}>Подробнее</Link></Button>
                        </Card.Body>
                        </Card>
                    ))
                }
                
            </CardGroup>
            </div>
            <h1>Последние новости</h1>
            <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
        )
    }
}

export default NewsMain;