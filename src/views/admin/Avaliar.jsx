import React from "react";

// react plugin used to create charts

import '../../assets/css/User.css'
import api from '../../services/api'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Table,Button,
  Col,Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

class Avaliar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        projetos:[],
      };
    }

  componentDidMount(){
    api.get('/projetosAvaliar/').then(res=>{
      this.setState({projetos:res.data.docs}) 
    })
  }
  
  render() {
    return (
      <>
        <div className="content">
          <Row>
              <Col md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">Projetos aguardando avaliação</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                  <thead>
                      <tr>
                      {/* <th>#</th> */}
                      <th>Título</th>
                      <th>Responsável</th>
                      <th>Início</th>
                      <th>Término</th>
                      <th>Orçamento</th>
                      <th>Status</th>
                      <th style={{textAlign: "center"}}>Ação</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.projetos.map((projeto,index)=> 
                      <tr key={projeto._id}>
                          <td>{projeto.titulo||"-----"}</td>
                          <td>{projeto.responsavel||"-----"}</td>
                          <td>{projeto.d_inicio||"-----"}</td>
                          <td>{projeto.d_final||"-----"}</td>
                          <td>{projeto.recursos_necessarios||"-----"}</td>
                          <td>{projeto.status||"-----"}</td>
                          <td className="detalhes"><Button color='warning' onClick={()=>{window.location.replace("avaliar/"+projeto._id)}}>Avaliar</Button></td>
                      </tr>
                      )
                    }                         
                  </tbody>
              </Table>
              </CardBody>
              </Card>
              </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Avaliar;