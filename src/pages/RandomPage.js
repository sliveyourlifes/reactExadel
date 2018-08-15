import React, {Component} from 'react' 
import randomWords from 'random-words'
import RandomGiphy from '../components/RandomGiphy'

class RandomPage extends Component {
    render() {
        return(
           <RandomGiphy/>
        )
    }
}

export default RandomPage;