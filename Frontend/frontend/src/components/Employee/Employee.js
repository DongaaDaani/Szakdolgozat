import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddEmpModal } from "./AddEmpModal";
import { EditEmpModal } from "./EditEmpModal";
import { Navigation } from "../Navigation";

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = { emps: [], addModalShow: false, editModalShow: false };
  }
  componentDidMount() {
    this.refreshList();

  }

  refreshList() {
    fetch("https://localhost:44320/api/Employees")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emps: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteEmp(empid) {
    if (window.confirm("Are you sure?")) {
      fetch("https://localhost:44320/api/Employees/" + empid, {
        method: "POST",
        headers: {
          Acceept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const {
      emps,
      employidfirst,
      empid,
      empfistname,
      emplastname,
      empadress,
      empphonenumber,
      empemail,
      empposition,
      empdepartment,
      empdepartmentid,
      emptasks,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div>
      <Navigation/>
      <div class="container">
           <h3 class="mt-3 d-flex justify-content-center">Alkalmazottak kezelése</h3>
            <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Új alkalmazott hozzáadása
          </Button>
          <AddEmpModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
        <Table className="mt-4 text-center" striped bordered hover size="sm">
          <thead>
            <tr>
             
              <th>Vezetéknév</th>
              <th>Keresztnév</th>
              <th>Lakcím</th>
              <th>Telefonszám</th>
              <th>Email</th>
              <th>Pozíció </th>
              <th>Részleg </th>
              <th>Feladatok</th>
              <th>Módosítás</th>
              <th>Törlés</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp) => (
              <tr Key={emp.$id}>
               
                <td>{emp.fistName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.adress}</td>
                <td>{emp.phoneNumber}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>{emp.deprartment}</td>
                <td>{emp.tasks}</td>

                <td>  
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          employidfirst: emp.$id,
                          empid: emp.employeeId,
                          empfistname: emp.fistName,
                          emplastname: emp.lastName,
                          empadress: emp.adress,
                          empphonenumber: emp.phoneNumber,
                          empemail: emp.email,
                          empposition: emp.position,
                          empdepartment: emp.Department,
                          empdepartmentid: emp.departmentId,
                          emptasks: emp.tasks,
                        })
                      }
                    >
                      Módosítás
                    </Button>

                  

                    <EditEmpModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      employidfirst={employidfirst}
                      empid={empid}
                      empfistname={empfistname}
                      emplastname={emplastname}
                      empadress={empadress}
                      empphonenumber={empphonenumber}
                      empemail={empemail}
                      empposition={empposition}
                      empdepartment={empdepartment}
                      empdepartmentid={empdepartmentid}
                      emptasks={emptasks}
                    />
                 
                </td>
                <td>
                <Button
                      className="mr-2"
                      onClick={() => this.deleteEmp(emp.employeeId)}
                      variant="danger"
                    >
                      Törlés
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      
      </div>
      </div>
    );
  }
}
