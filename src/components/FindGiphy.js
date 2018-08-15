import React, {Component} from 'react' 
import axios from 'axios'

class FindGiphy extends Component {

    state = {
        data:[]
    }

    componentDidMount() {
        const url = 'http://api.giphy.com/v1/gifs/trending?';
        const apiKey = 'api_key=3whiADS5q2I87ugJpVmZqjPraaI11u5a';
        let limitValue = 4
        const limit = '&limit='+ limitValue;
        
        axios.get(url + apiKey + limit)
            .then(res => {
                const {data} = res.data;
                this.setState({data: data})
                console.log(this.state.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const {data} = this.state.data;
        console.log(data)
        return(
            <div>
                {/* {data.map(item => <div key={item.id}>{item.images.fixed_heigth.webp}</div>)} */}
                a
            </div>
        )
    }
}

export default FindGiphy;