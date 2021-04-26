import React from 'react'
import { Link } from "react-router-dom"
import {withRouter} from 'react-router-dom'
import './index.css'

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src="https://sun9-8.userapi.com/impg/xGZDQoPRMuihw9NgagiCQNRUVDpmplzR-CbrDA/X8BCqlQ15Ao.jpg?size=1300x1300&quality=96&sign=76f3ccafc7f84417a35392e68b463524&type=album" alt=""/>
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