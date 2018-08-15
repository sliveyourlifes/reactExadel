import React from 'react';
import {Link} from 'react-router-dom'

const Header = ()=> {
    return(
      <React.Fragment>
        <header>
            <nav>
              <ul style={{listStyleType:'none',display:'inline-flex'}}>
                <li style={{marginRight:'20px'}}><Link to='/'>Home</Link></li>
                <li><Link to='/random'>Random</Link></li>
              </ul>
            </nav>
          </header>
      </React.Fragment>
    )
  }
  export default Header;