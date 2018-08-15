import React, {Component} from 'react' 
import randomWords from 'random-words'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
});

class RandomGiphy extends Component{

    state = {
        randomValue:'',
    }
    
    handleClick = ()=> {
        const randomValue = randomWords();
        console.log(randomValue);

        const url = 'http://api.giphy.com/v1/gifs/random?';
        const apiKey = 'api_key=3whiADS5q2I87ugJpVmZqjPraaI11u5a';
        const tag = '&tag='+ randomValue;
        
        axios.get(url + apiKey + tag)
            .then(res => {
                const {data} = res.data;
                console.log(data)
                console.log(res.data)
                this.setState({randomValue:data.images.fixed_height.webp})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button} 
                    onClick={this.handleClick}
                >
                    Get Random
                </Button>
                <div>
                    <img src={this.state.randomValue}/>
                </div>
            </div>
        )
    }
}

RandomGiphy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RandomGiphy);
