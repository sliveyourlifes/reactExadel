import React, { Component } from 'react';
import './App.css';
import { Route, Switch ,Link } from 'react-router-dom';
import FindGiphy from './components/FindGiphy'
import RandomGiphy from './components/RandomGiphy'

const Header = ()=> {
  return(
    <React.Fragment>
      <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/random'>Random</Link></li>
            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}

const Main = ()=> {
  return(
    <React.Fragment>
      <main>
        <Switch>
          <Route exact path='/' component={FindGiphy}/>
          <Route path='/random' component={RandomGiphy}/>
        </Switch>
      </main>
    </React.Fragment>
  )
}

const Footer = () => {
  return(
    <React.Fragment>
      <footer>
        <p>Posted by: Alex Kurylionak</p>
        <p>Contact information: <a href="mailto:akurylionak@exadel.com">
        akurylionak@exadel.com</a>.</p>
      </footer>
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
