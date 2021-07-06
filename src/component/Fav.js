import React, { Component } from 'react';
import axios from 'axios';
import {Card,Button,CardColumns} from 'react-bootstrap';
import UpdateModal from './UpdateModal';

export class Fav extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            show:false,
            idx:-1,
            name:'',
            url:''
        }
    }

    componentDidMount=()=>{
        let url=`${process.env.REACT_APP_URL}/getDataDB`;
        axios.get(url).then((result)=>{
            this.setState({
                data:result.data
            })
        })
    }
    deleteData=(id)=>{
        console.log(id);

        let url=`${process.env.REACT_APP_URL}/deleteDataDB/${id}`;
        axios.delete(url).then((result)=>{
            this.setState({
                data:result.data,
            })
        })
    }
    show=(idx)=>{
        console.log(idx);
        this.setState({
            show:!this.state.show,
            name:this.state.data[idx].name,
            url:this.state.data[idx].url,
            idx:idx,
        })
    }
    close=()=>{
        this.setState({
            show:!this.state.show,

        })
    }

    updateData=(e)=>{
        e.preventDefault();
        const obj={
            name:e.target.name.value,
            url:e.target.url.value,
            id:this.state.data[this.state.idx]._id
        }
        let url=`${process.env.REACT_APP_URL}/updateDataDB`
        axios.put(url,obj).then((result)=>{
            this.setState({
                data:result.data,

            })
        })

    }
    render() {
        return (
            <div>

                <CardColumns>
                {this.state.data.map((item,idx)=>{
                    return(
                        <Card style={{ width: '18rem' }}key={idx}>
                            <Card.Img variant="top" src={item.url} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                               
                                <Button variant="primary" onClick={()=>this.deleteData(item._id)}>Delete</Button>
                                <Button variant="primary" onClick={()=>this.show(idx)}>Update</Button>

                            </Card.Body>
                        </Card>
                    )
                })}
                </CardColumns>

                <UpdateModal 
                show={this.state.show}
                close={this.close}
                name={this.state.name}
                url={this.state.url}
                updateData={this.updateData}
                />
 

                
            </div>
        )
    }
}

export default Fav
