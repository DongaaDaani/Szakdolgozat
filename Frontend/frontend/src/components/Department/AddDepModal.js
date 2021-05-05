import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Navigation } from "../Navigation";
export class AddDepModal extends Component {
  constructor(props) {
    super(props);

    this.state = {lead:[], snackbaropen: false, snackbarmsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://localhost:44320/api/Leaders")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lead: data });
      });
  }


  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };
  handleSubmit(event) {
    event.preventDefault();
    console.log("*********")
    console.log(event.target.DepartmentLeader.firstName)
    console.log(event.target.DepartmentLeader.lastName)
    console.log(event.target.DepartmentLeader.departmentId)
    console.log(event.target.DepartmentLeader.department)
    console.log(event.target.DepartmentLeader.email)
    console.log(event.target.DepartmentLeader.date)
    // Example POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData("https://localhost:44320/api/Departments", {
      
      name: event.target.DepartmentName.value,
       leader: {
        fistName:  event.target.DepartmentLeader.value1,
        lastName:  event.target.DepartmentLeader.lastName,
        departmentId:  event.target.DepartmentLeader.departmentId,
        department:  event.target.DepartmentLeader.department,
        email:  event.target.DepartmentLeader.email,
        date:  event.target.DepartmentLeader.date,
        tasks:  event.target.DepartmentLeader.tasks
            }
    }).then((data) => {
      console.log(data);
    });
  }


  render() {
    const{emps,fistName,lastName,departmentId,department,email,date,task}=this.state
    return (
      <div>
    
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id"> {this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            ></IconButton>,
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
              Add Department
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="DepartmentName">
                    <Form.Label>Department name</Form.Label>
                    <Form.Control
                      type="text"
                      name="DepartmentName"
                      placeholder="Department name"
                    />
                  </Form.Group>

                

                  <Form.Group controlId="DepartmentLeader">
                    <Form.Label>Department Leader</Form.Label>

                    <Form.Control as="select">
                      {this.state.lead.map((dep) => (
                        <option
                          key={dep.leaderId}
                          firstName={dep.fistName}
                          lastName={dep.lastName}
                          departmentId={dep.departmentId}
                          department={dep.department}
                          email={dep.email}
                          date={dep.date}
                          tasks={dep.tasks}
                        >
                          {dep.fistName}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                

                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Add Department
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      </div>
    );
  }
}
