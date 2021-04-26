
import './App.css';
import Header from './modules/Main/Header/index'
import Footer from './modules/Main/Footer/index'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Home from './modules/Main/Home';
import Connect from './modules/Main/Conncet';
import FeedBack from './modules/Main/Feedback';
import NewsProjects from './modules/Main/NewsProjects';
import OtherRequests from './modules/Main/OtherRequests';
import Pets from './modules/Main/Pets';
import { createBrowserHistory } from "history";
import {Post} from './modules/Main/Home/News/Post/post';
import NewsMain from './modules/Main/Home/News/news';
import {Pet} from './modules/Main/Pets/Pet/pet'

const customHistory = createBrowserHistory();


function App() {
  return (
    <>
      <BrowserRouter history = {customHistory}>
      <Header/>
        <Switch>
          <Route path = '/' render= {() => <Home/>} exact />
          <Route path = '/news/:number' render= {() => <Post/>} />
          <Route path = '/pets/:number' render= {() => <Pet/>} />
          <Route path = '/news' render= {() => <NewsMain/>} exact />
          <Route path = '/connect' render= {() => <Connect/>} />
          <Route path = '/feedback' render= {() => <FeedBack/>} />
          <Route path = '/newsprojects' render= {() => <NewsProjects/>} />
          <Route path = '/other' render= {() => <OtherRequests/>} />
          <Route path = '/pets' render= {() => <Pets/>} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
