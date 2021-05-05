import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

export class AddEmpModal extends Component {
  constructor(props) {
    super(props);

    this.state = { deps: [], snackbaropen: false, snackbarmsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://localhost:44320/api/Departments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit(event) {
    event.preventDefault();
   
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

    postData("https://localhost:44320/api/Employees", {
      fistName: event.target.firstname.value,
      lastname: event.target.lastname.value,
      adress: event.target.address.value,
      phonenumber: event.target.phonenumber.value,
      email: event.target.email.value,
      position: event.target.position.value,
      departmentId: event.target.departmentId.value,
    }).then((data) => {
      console.log(data);
      this.setState({snackbaropen:true})
    });
  }

  render() {
    return (
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
              Alkalmazott hozzáadása
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="firstname">
                    <Form.Label>Vezetéknév</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      placeholder="Vezetéknév"
                    />
                  </Form.Group>

                  <Form.Group controlId="lastname">
                    <Form.Label>Keresztnév</Form.Label>

                    <Form.Control
                      type="text"
                      name="lastname"
                      placeholder="Keresztnév"
                    />
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Lakcím</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Lakcím"
                    />
                  </Form.Group>

                  <Form.Group controlId="phonenumber">
                    <Form.Label>Telefonszám</Form.Label>
                    <Form.Control
                      type="text"
                      name="phonenumber"
                      placeholder="+36/30/123-345"
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Username@email.com"
                    />
                  </Form.Group>

                  <Form.Group controlId="position">
                    <Form.Label>Pozíció</Form.Label>
                    <Form.Control
                      type="text"
                      name="position"
                      placeholder="Pozíció"
                    />
                  </Form.Group>

                  <Form.Group controlId="departmentId">
                    <Form.Label>Department name</Form.Label>

                    <Form.Control as="select">
                      {this.state.deps.map((dep) => (
                        <option
                          key={dep.departmentId}
                          value={dep.departmentId}
                          department={dep.department}
                        >
                          {dep.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Alkalmazott hozzáadása
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Mégse
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
