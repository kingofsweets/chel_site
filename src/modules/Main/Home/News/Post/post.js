import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {feat_news} from '../content/test-news'
import './post.css'

export function Post(){
    const match = useRouteMatch()
    const num = match.params.number

        return(
            <div className = 'post'>
                <h1>{feat_news[num].title}</h1>
                <img src = {feat_news[num].src} alt = 'a'/>
                <p>{feat_news[num].desc}</p>
                <Link to = '/news'>Назад</Link>
            </div>
        )
    }
