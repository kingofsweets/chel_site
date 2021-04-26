import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

export const array=[
    {
        nameItems: 'lexa',
        model:'helper'
    },

    {
        nameItems: 'sasha',
        model:'kurator'
    },

    {
        nameItems: 'egor',
        model:'kloun'
    },
    {
        nameItems: 'ruslan',
        model:'kloun'
    },

    {
        nameItems: 'annastasia',
        model:'super-binder'
    },

    {
        nameItems: 'cats',
        model:'adidas'
    },

    ]
;


class Pets extends React.Component{
    render(){
        return(
            <div className= 'main-pets'>
                <div className = 'lols'>
                    {
                        array.map((i)=> (
                            <div className = 'lol'>
                                <h3>{i.nameItems}</h3>
                                <p>{i.model}</p>
                                <button><Link to = {'/pets/' + array.indexOf(i)} >Подробнее</Link></button>
                            </div>
                        ))
                    }
                </div>
                <div className = 'sub-pets-menu'>
                    <button>Предложить своего</button>
                    <button>Фильтр</button>
                    <button>Сортировка</button>

                </div>
            </div>
        )
    }
}

export default Pets;