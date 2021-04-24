import React from 'react'
import { Link } from "react-router-dom"
import {withRouter} from 'react-router-dom'
import './index.css'

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src="https://sun9-46.userapi.com/impf/c639121/v639121237/6030c/4-hSKU1k5ZM.jpg?size=1300x1300&quality=96&sign=12b43b7b8251962a7169e028159cf9f7&type=album" alt=""/>
                <h1>"Шанс" - Фонд помощи бездомным животным</h1>
                <div className = 'main-menu'>
                    <Link to = '/'>Главная</Link>
                    <Link to = '/connect'>О нас</Link>
                    <Link to = '/pets'>Питомцы</Link>
                    <Link to = '/other'>Другие запросы</Link>
                    <Link to = '/feedback'>Отчёты</Link>
                </div>
            </header>
        )
    }
}

export default withRouter(Header);