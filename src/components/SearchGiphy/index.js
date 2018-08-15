import React, {Component} from 'react' 
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    input: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    form: {
        textAlign: 'center',
    },
  });

class SearchGiphy extends Component {

    state={
        value:''
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({value:event.target.value});
        console.log(this.state.value);
    }

    handleSubmit = ()=> {
        // this.props.getGiphy(this.state.value.trim());
        // this.setState({value:''})
        const url = 'http://api.giphy.com/v1/gifs/search?q=';
        const apiKey = '&api_key=3whiADS5q2I87ugJpVmZqjPraaI11u5a';
        let limitValue = 6
        const limit = '&limit='+ limitValue
        
        axios.get(url + this.state.value + apiKey + limit)
            .then(res => {
                const {data} = res.data;
                this.props.getGiphy(data);
                this.setState({value: ' '})
            })
            .catch((error) => {
                console.log(error);
            })

            const aaa= Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
         console.log(aaa)
    }
  

    render() {
        const { classes } = this.props;
        return(
           <form className={classes.form}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search">value</InputLabel>
                <Input id="search" value={this.state.name} onChange={this.handleChange} />
              </FormControl>
              <Button 
                    size="medium" 
                    variant="contained" 
                    color="primary" 
                    disabled={!this.state.value} 
                    className={classes.button}
                    onClick={this.handleSubmit}
                >
                    Submit
             </Button>
           </form>
        )
    }
}

SearchGiphy.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SearchGiphy);