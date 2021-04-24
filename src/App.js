
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

const customHistory = createBrowserHistory();


function App() {
  return (
    <>
      <BrowserRouter history = {customHistory}>
      <Header/>
        <Switch>
          <Route path = '/' render= {() => <Home/>} exact />
          <Route path = '/connect' render= {() => <Connect/>} />
          <Route path = '/feedback' render= {() => <FeedBack/>} />
          <Route path = '/newsprojects' render= {() => <NewsProjects/>} />
          <Route path = '/other' render= {() => <OtherRequests/>} />
          <Route path = '/pets' render= {() => <Pets/>} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
