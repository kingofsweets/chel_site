import React from 'react'
import MainSlider from './Slider/MainSlider';
import './index.css'
import NewsMain from './News/news';

class Home extends React.Component{
    render(){
        return(
            <div className = 'main'>
                <MainSlider/>
                <NewsMain/>
            </div>
        )
    }
}

export default Home;