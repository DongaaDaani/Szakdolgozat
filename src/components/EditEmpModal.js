import React, {Component} from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'

export class EditEmpModal extends Component{
    constructor(props){
        super(props);

        this.state={deps:[],snackbaropen:false,snackbarmsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch('https://localhost:44315/api/Department')
        .then(response =>response.json())
        .then(data=>{
            this.setState({deps:data})
        })
    }

    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});
    }

    handleSubmit(event){
        event.preventDefault();

        fetch('https://localhost:44315/api/Employee',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                EmployeeID:event.target.EmployeeID.value,
                EmployeeName:event.target.EmployeeName.value,
                Department :event.target.Department.value,
                MailID :event.target.MailID.value,
                DOJ :event.target.DOJ.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            // alert(result);   
            this.setState({snackbaropen:true,snackbarmsg:result})
        },
        (error)=>{
            this.setState({snackbaropen:true,snackbarmsg:'fail'})
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
                Edit Employee
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>

                      <Form.Group controlId="EmployeeID">
                              <Form.Label>Employee Id</Form.Label>
                              <Form.Control type="text" name="EmployeeID" defaultValue={this.props.empid} required disabled placeholder="EmployeeID" />
                                  
                          </Form.Group>

                          <Form.Group controlId="EmployeeName">
                              <Form.Label>Employee name</Form.Label>
                              <Form.Control type="text" name="EmployeeName" defaultValue={this.props.empname}  required placeholder="Employee name" />
                                  
                          </Form.Group>

                          <Form.Group controlId="Department">
                              <Form.Label>Department name</Form.Label>
                             
                             <Form.Control as="select" defaultValue={this.props.depmt} >
                                {this.state.deps.map(dep=>
                                    <option key={dep.DepartmentID}>{dep.DepartmentName}</option>
                                    )}
                             </Form.Control>
                                  
                          </Form.Group>

                          <Form.Group controlId="MailID">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" name="MailID"  defaultValue={this.props.mailid}  required placeholder="MailID" />
                                  
                          </Form.Group>

                          <Form.Group controlId="DOJ">
                              <Form.Label>Date of join</Form.Label>
                              <Form.Control type="date" name="DOJ" defaultValue={this.props.doj}  required placeholder="DOJ" />
                                  
                          </Form.Group>

                          <Form.Group>
                              <Button variant="primary" type="submit">Update Employee</Button>
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