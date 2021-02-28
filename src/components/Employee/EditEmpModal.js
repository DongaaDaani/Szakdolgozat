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
          //  mode: 'no-cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                $id:event.target.empfId.value,
                employeeId:event.target.employeeId.value,
                fistName:event.target.firstname.value,
                lastName :event.target.lastName.value,
                adress :event.target.adress.value,
                phoneNumber :event.target.phoneNumber.value,
                email:event.target.email.value,
                position :event.target.position.value,
                deprartment :event.target.department.value,
                departmentId :event.target.departmentId.value,
                tasks :event.target.tasks.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            // alert(result);   
            this.setState({snackbaropen:true,snackbarmsg:result})
        },
        (error)=>{
            this.setState({snackbaropen:true,snackbarmsg:'fail'})
            console.log(error)
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

                          
                      <Form.Group controlId="empfId">
                              <Form.Label>Id</Form.Label>
                              <Form.Control type="text" name="empfId" defaultValue={this.props.employidfirst}  disabled placeholder="EmployeeID" />
                                  
                          </Form.Group>

                      <Form.Group controlId="employeeId">
                              <Form.Label>Id</Form.Label>
                              <Form.Control type="text" name="employeeId" defaultValue={this.props.empid}  disabled placeholder="EmployeeID" />
                                  
                          </Form.Group>

                          <Form.Group controlId="firstname">
                              <Form.Label>Fist name</Form.Label>
                              <Form.Control type="text" name="firstname" defaultValue={this.props.empfistname}   placeholder="Fist name" />
                                  
                          </Form.Group>

                         
                          <Form.Group controlId="lastName">
                              <Form.Label>Last name</Form.Label>
                              <Form.Control type="text" name="lastName"  defaultValue={this.props.emplastname}   placeholder="Last name" />
                                  
                          </Form.Group>

                          <Form.Group controlId="adress">
                              <Form.Label>n</Form.Label>
                              <Form.Control type="text" name="adress" defaultValue={this.props.empadress}  placeholder="Address" />
                                  
                          </Form.Group>






                      <Form.Group controlId="phoneNumber">
                              <Form.Label>Phone number</Form.Label>
                              <Form.Control type="text" name="phoneNumber" defaultValue={this.props.empphonenumber}   placeholder="EmployeeID" />
                                  
                          </Form.Group>

                          <Form.Group controlId="email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="text" name="email" defaultValue={this.props.empemail}   placeholder="Department" />
                                  
                          </Form.Group>

                        

                          <Form.Group controlId="position">
                              <Form.Label>Position</Form.Label>
                              <Form.Control type="text" name="position"  defaultValue={this.props.empposition}   placeholder="Department id" />
                                  
                          </Form.Group>

                          <Form.Group controlId="department">
                              <Form.Label>Department</Form.Label>
                              <Form.Control type="text" name="department" defaultValue={this.props.empdepartment}   placeholder="Department" />
                                  
                          </Form.Group>

                           <Form.Group controlId="departmentId">
                              <Form.Label>Department id</Form.Label>
                              <Form.Control type="text" name="departmentId" defaultValue={this.props.empdepartmentid}   placeholder="Department id" />
                                  
                          </Form.Group>

                           <Form.Group controlId="tasks">
                              <Form.Label>tasks</Form.Label>
                              <Form.Control type="text" name="tasks" defaultValue={this.props.emptasks}  placeholder="tasks" />
                                  
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