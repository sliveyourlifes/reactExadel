import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage'
import RandomPage from './pages/RandomPage'
import Header from './components/Header'
import Footer from './components/Footer'



const Main = ()=> {
  return(
    <React.Fragment>
      <main>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/random' component={RandomPage}/>
        </Switch>
      </main>
    </React.Fragment>
  )
}



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
