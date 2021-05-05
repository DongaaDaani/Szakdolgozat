import React, {Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'

export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.state={snackbaropen:false, snackbarmsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});
    };
    handleSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44320/api/Departments',{
            method:'PUT',
            //mode: 'no-cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                
                $id:event.target.id.value,
                departmentId:event.target.DepartmentID.value,
                name:event.target.DepartmentName.value,
                leader:event.target.DepartmentLeader.value,
                employee:event.target.DepartmentEmployee.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            // alert(result);   
            this.setState({snackbaropen:true,snackbarmsg:result})
        },
        (error)=>{
            this.setState({snackbaropen:true,snackbarmsg:'fail'})
            console.log(error);
        }
        )   
    }

    render(){
        return(
             
            <div className="container">
    <Snackbar
      anchorOrigin={{vertical:'center',horizontal:'center'}}  open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarClose}
        message={<span id="message-id"> {this.state.snackbarmsg}</span> } 
        action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={this.snackbarClose}>

            </IconButton>
        ]}
        />
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Department
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>

                      <Form.Group controlId="id">
                              <Form.Label>ID</Form.Label>
                              <Form.Control type="text" name="id"  disabled   defaultValue={this.props.depaid} placeholder="DepartmentID" />
                                  
                          </Form.Group>

                      <Form.Group controlId="DepartmentID">
                              <Form.Label>Department ID2</Form.Label>
                              <Form.Control type="text" name="DepartmentID" required  disabled   defaultValue={this.props.depid} placeholder="DepartmentID" />
                                  
                          </Form.Group>


                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Department name</Form.Label>
                              <Form.Control type="text" name="DepartmentName" required defaultValue={this.props.depname}  placeholder="DepartmentName" />
                                  
                          </Form.Group>

                          <Form.Group controlId="DepartmentLeader">
                              <Form.Label>Leader</Form.Label>
                              <Form.Control type="text" name="DepartmentLeader"  defaultValue={this.props.lead}  placeholder="DepartmentName" />
                                  
                          </Form.Group>

                          <Form.Group controlId="DepartmentEmployee">
                              <Form.Label>Employee</Form.Label>
                              <Form.Control type="text" name="DepartmentEmployee"  defaultValue={this.props.empl}  placeholder="DepartmentName" />
                                  
                          </Form.Group>

                    

                          <Form.Group>
                              <Button variant="primary" type="submit">Update Department</Button>
                          </Form.Group>
                      </Form>
                  </Col>
              </Row>
            

            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
        );

    }
}