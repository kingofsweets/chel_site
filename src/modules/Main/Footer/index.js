import React from 'react'
import './index.css'
import vk from './vk.png'
import insta from './insta.png'

class Footer extends React.Component{
    render(){
        return(
            <div className = 'footerStyle'>
                <div class="vsemDivamDiv">
                    <p>НКО Шанс</p>
                    <p>Контакты:</p>
                    <div><a href="https://vk.com/chancesalavat"><img class="futer" src={vk} alt="ВКонтакте"/></a></div>
                    <div><a href="https://www.instagram.com/shancesalavat/"><img class="futer" src={insta} alt="Instagram"/></a></div>
                </div>
            </div>
        )
    }
}

export default Footer;