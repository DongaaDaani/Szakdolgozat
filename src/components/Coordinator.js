import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {Modal,Row,Col,Form} from 'react-bootstrap';

import {EditDepModal} from './EditDepModal';

export class Coordinator extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}

    }

    componentDidMount(){
        this.refreshList();
    }


    refreshList(){
       fetch('https://localhost:44315/api/Coordinator')
       .then(response=> response.json())
       .then(data=>{ 
        this.setState({deps:data});
       });
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(depid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:44315/api/Coordinator/'+depid,{
                method:'DELETE',
                headers:{'Acceept':'application/json',
                'Content-Type':'application/json'
            }
            })
        }
    }

    render(){

        const{deps,depid,depname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>

            <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Rendszám </Form.Label>
                              <Form.Control type="text" name="DepartmentName" required placeholder="XXX-999" readOnly />
                                  
                          </Form.Group>

                         
                      </Form>
                  </Col>
                  <Col sm={6} >
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Márka</Form.Label >
                              <Form.Control type="text" name="DepartmentName" required placeholder="Márka megnevezése" readOnly/>
                                  
                          </Form.Group>

                         
                      </Form>
                  </Col>
              </Row>

              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Típus</Form.Label>
                              <Form.Control type="text" name="DepartmentName" required placeholder="Típus" readOnly />
                                  
                          </Form.Group>

                      </Form>
                  </Col>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label> Model </Form.Label>
                              <Form.Control type="text" name="DepartmentName" required placeholder="Model" readOnly />
                                  
                          </Form.Group>

                         
                      </Form>
                  </Col>
              </Row>


              <Row>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Futott Km</Form.Label>
                              <Form.Control type="text" name="DepartmentName" required placeholder="Adja meg a km óra állását" readOnly />
                                  
                          </Form.Group>

                     
                      </Form>
                  </Col>
                  <Col sm={6}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Üzemóra</Form.Label>
                              <Form.Control type="text" name="DepartmentName" required placeholder="Adja meg az üzemórát" readOnly/>
                                  
                          </Form.Group>

                     
                      </Form>
                  </Col>
              </Row>

        
              <Row>
                  <Col sm={12}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Probléma tipusa</Form.Label>
                              
                              <Form.Control type="textarea" name="DepartmentName" required placeholder="Adja meg a probléma pontos leírását" readOnly />
                                  
                          </Form.Group>

                        
                      </Form>
                  </Col>
              </Row>

              <Row>
                  <Col sm={12}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Felügyelő leírása </Form.Label>
                              
                              <Form.Control type="textarea" name="DepartmentName" required placeholder="Adja meg a felügyelő pontos leírását" readOnly  />
                                  
                          </Form.Group>

                     
                      </Form>
                  </Col>
              </Row>


              <Row>
                  <Col sm={6}>
                  <Form>
                        <label>
                       A Probléma típusa :
                    
                        </label>

                        <label>
                        Külső : 
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                       

                        <label>
                        Belső :
                        <input
                            name="isGoing"
                            type="checkbox"
                            value="belso"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>

                        <label>
                        Személyes :
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        
                       
                       
                    </Form>
                  </Col>

                  <Col sm={6}>
                  <Form>
                  <label>
                       Fontosság :  
                    
                        </label>

                        <label>
                        Nem fontos
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>
                        <label>
                        Belső:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>

                        <label>
                        Személyes:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange} />
                        </label>                       
                    </Form>
                  </Col>
              </Row>

              <Row>
                  <Col sm={12}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Group controlId="DepartmentName">
                              <Form.Label>Koordinátor leírása </Form.Label>
                              
                              <Form.Control type="textarea" name="DepartmentName" required placeholder="Adja meg a felügyelő pontos leírását"  />
                                  
                          </Form.Group>

                          <Form.Group>
                              <Button variant="primary" type="submit">Send the next task.</Button>
                          </Form.Group>
                        
                      </Form>
                  </Col>
              </Row>




           <Table className="mt-4" striped bordered hover size="sm" >
               <thead>
                   <tr>
                       <th>Coordinator ID</th>
                       <th>Coordinator Name</th>
                       <th>Option</th>
                   </tr>
               </thead>
               <tbody>
                   {deps.map(dep=>
                    <tr Key={dep.CoordinatorID}>
                    <td>{dep.CoordinatorID}</td>
                   <td>{dep.CoordinatorName}</td>
                   <td>
                       <ButtonToolbar>
                           <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,depid:dep.CoordinatorID,depname:dep.CoordinatorName})} > 
                               Edit
                           </Button>

                           <Button className="mr-2" onClick={()=>this.deleteDep(dep.CoordinatorID)}  variant="danger" >Delete
                           </Button>

                           <EditDepModal show={this.state.editModalShow} onHide={editModalClose}  depid={depid} depname={depname} />
                       </ButtonToolbar>
                   </td>
                    </tr>
                    )}
               </tbody>
           </Table>





<ButtonToolbar>
<Button variant="primary" onClick={()=>this.setState({addModalShow:true})}>Add Coordinator</Button> 
<AddDepModal show={this.state.addModalShow} onHide={addModalClose} />
</ButtonToolbar> 

</div>

        )
    }
}