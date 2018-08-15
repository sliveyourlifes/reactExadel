import React, {Component} from 'react' 
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchGiphy from '../components/SearchGiphy'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
    input: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 900,
        height: 'auto',
      },
      subheader: {
        width: '100%',
      },
  });

class MainPage extends Component {

    state = {
        data:[]
    }

    componentDidMount() {
        const url = 'http://api.giphy.com/v1/gifs/trending?';
        const apiKey = 'api_key=3whiADS5q2I87ugJpVmZqjPraaI11u5a';
        let limitValue = 6
        const limit = '&limit='+ limitValue;
        
        axios.get(url + apiKey + limit)
            .then(res => {
                const {data} = res.data;
                this.setState({data: data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getGiphy = (data)=> {
        const newData = data;
        this.setState({data:newData})
    }


    render() {
        const { data } = this.state;
        const { classes } = this.props;
        let newsTemplate;
        if (data.length > 0) {
             newsTemplate = <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {data.map(item => (
                    <GridListTile key={item.id} cols={1}>
                        <img src={item.images.fixed_height.webp} />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
          } else {
            newsTemplate = <CircularProgress color="secondary" className={classes.progress} />
          }
        return(
            <React.Fragment>
                <SearchGiphy getGiphy={this.getGiphy} />
                <div className="news">
                    {newsTemplate}
                </div>
            </React.Fragment>
        )
    }
}


MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(MainPage);