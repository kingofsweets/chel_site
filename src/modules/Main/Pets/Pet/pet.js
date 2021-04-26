import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {array} from '../index'
import './pet.css'

export function Pet(){
    const match = useRouteMatch()
    const num = match.params.number

        return(
            <div className = 'post'>
                <h1>{array[num].nameItems}</h1>
                <img src = 'http://dogdiary.ru/wp-content/uploads/2018/07/shhenok-zolotistogo-retrivera.jpg' alt = 'a'/>
                <p>{array[num].model}</p>
                <Link to = '/pets'>Назад</Link>
            </div>
        )
    }
