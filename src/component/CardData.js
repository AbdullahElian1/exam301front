import React, { Component } from 'react'
import {Card,Button,CardColumns} from 'react-bootstrap';
import axios from 'axios';

export class CardData extends Component {
    saveData=async(item)=>{
        const obj={
            name:item.name,
            url:item.url,
        }
        console.log(obj);

        let url=`${process.env.REACT_APP_URL}/saveDataDB`
        axios.post(url,obj).then((result)=>{
            console.log("added");
        })

    }
    render() {
        return (
            <div>
                <CardColumns>
                {this.props.data.map((item,idx)=>{
                    return(
                        <Card style={{ width: '18rem' }}key={idx}>
                            <Card.Img variant="top" src={item.url} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                               
                                <Button variant="primary" onClick={()=>this.saveData(item)}>Add To Fav</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
                </CardColumns>
                
            </div>
        )
    }
}

export default CardData
