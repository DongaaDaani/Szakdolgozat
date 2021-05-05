import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Modal, Row, Col, Form } from "react-bootstrap";
import {AddDepModal} from '../Department/AddDepModal';
import {EditDepModal} from '../Department/EditDepModal';
import { Navigation } from "../Navigation";

export class Mechanical extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false, editModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://localhost:44315/api/Mechanical")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteDep(depid) {
    if (window.confirm("Are you sure?")) {
      fetch("https://localhost:44315/api/Mechanical/" + depid, {
        method: "DELETE",
        headers: {
          Acceept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { deps, depid, depname } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div>
      <Navigation/>
      <div class="container">
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Rendszám </Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="XXX-999"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Márka</Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Márka megnevezése"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Típus</Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Típus"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label> Model </Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Model"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Futott Km</Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Adja meg a km óra állását"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Üzemóra</Form.Label>
                <Form.Control
                  type="text"
                  name="DepartmentName"
                  required
                  placeholder="Adja meg az üzemórát"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Probléma tipusa</Form.Label>

                <Form.Control
                  type="textarea"
                  name="DepartmentName"
                  required
                  placeholder="Adja meg a probléma pontos leírását"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Felügyelő leírása </Form.Label>

                <Form.Control
                  type="textarea"
                  name="DepartmentName"
                  required
                  placeholder="Adja meg a felügyelő pontos leírását"
                  readOnly
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form>
              <label>A Probléma típusa :</label>

              <label>
                Külső :
                <input
                  disabled
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>

              <label>
                Belső :
                <input
                  disabled
                  name="isGoing"
                  type="checkbox"
                  value="belso"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>

              <label>
                Személyes :
                <input
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
            </Form>
          </Col>

          <Col sm={6}>
            <Form>
              <label>Fontosság :</label>

              <label>
                Nem fontos
                <input
                  disabled
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Belső:
                <input
                  disabled
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>

              <label>
                Személyes:
                <input
                  disabled
                  name="isGoing"
                  type="checkbox"
                  checked={this.state.isGoing}
                  onChange={this.handleInputChange}
                />
              </label>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="DepartmentName">
                <Form.Label>Koordinátor leírása </Form.Label>

                <Form.Control
                  type="textarea"
                  name="DepartmentName"
                  required
                  placeholder="Adja meg a felügyelő pontos leírását"
                  disabled
                />
              </Form.Group>

              <Form.Group>
                <Button variant="primary" type="submit">
                  Send the next task.
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Mechanical ID</th>
              <th>Mechanical Name</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr Key={dep.MechanicalID}>
                <td>{dep.MechanicalID}</td>
                <td>{dep.MechanicalName}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          depid: dep.MechanicalID,
                          depname: dep.MechanicalName,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="mr-2"
                      onClick={() => this.deleteDep(dep.MechanicalID)}
                      variant="danger"
                    >
                      Delete
                    </Button>

                    <EditDepModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      depid={depid}
                      depname={depname}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Mechanical
          </Button>
          <AddDepModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
      </div>
    );
  }
}
