import React, { Component } from 'react';
import CardData from './CardData';
import axios from 'axios';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }

    componentDidMount=()=>{
        console.log(process.env.REACT_APP_URL);
        let url=`${process.env.REACT_APP_URL}/getdata`;
        axios.get(url).then((result)=>{
            this.setState({
                data:result.data
            })
        })
    }
    render() {
        return (
            <div>
                <CardData data={this.state.data}/>
                
            </div>
        )
    }
}

export default Home
