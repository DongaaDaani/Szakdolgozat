import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddDepModal } from "./AddDepModal";
import { EditDepModal } from "./EditDepModal";
import { Navigation } from "../Navigation";

export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false, editModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://localhost:44320/api/Departments")
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
      fetch("https://localhost:44320/api/Departments/" + depid, {
        method: "POST",
        headers: {
          Acceept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }




  render() {
    const { deps, depid, depname, lead, empl, depaid } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div>
      <Navigation/>
      <div class="container">
        <h3 class="mt-3 d-flex justify-content-center">Részlegek kezelése</h3>
        <Button
          variant="primary"
          onClick={() => this.setState({ addModalShow: true })}
        >
          Új részleg hozzáadása
        </Button>
        <Table className="mt-4 text-center" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Részleg neve</th>
              <th>Vezető neve</th>
              <th>Módosítás</th>
              <th>Törlés</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr Key={dep.$id}>
                <td>{dep.name}</td>
                <td>{dep.leader}</td>

                <td>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick={() =>
                      this.setState({
                        editModalShow: true,
                        depaid: dep.$id,
                        depid: dep.departmentId,
                        depname: dep.name,
                        lead: dep.leader,
                        empl: dep.employee,
                      })
                    }
                  >
                    Edit
                  </Button>

                  <EditDepModal
                    show={this.state.editModalShow}
                    onHide={editModalClose}
                    depaid={depaid}
                    depid={depid}
                    depname={depname}
                    lead={lead}
                    empl={empl}
                  />
                </td>
                <td>
                  <Button
                    className="mr-2"
                    onClick={() => this.deleteDep(dep.departmentId)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <AddDepModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
      </div>
    );
  }
}
