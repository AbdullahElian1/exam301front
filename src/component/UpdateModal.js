import React, { Component } from 'react';
import {Modal,Form,Button} from 'react-bootstrap'

export class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(e)=>this.props.updateData(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" defaultValue={this.props.name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Picture Link</Form.Label>
                    <Form.Control type="text" placeholder="url" name="url" defaultValue={this.props.url} />
                </Form.Group>
               

                <Button variant="primary" type="submit" onClick={this.props.close}>
                    Update
                </Button>
             
        </Form>
       
      </Modal>
                
            </div>
        )
    }
}

export default UpdateModal
