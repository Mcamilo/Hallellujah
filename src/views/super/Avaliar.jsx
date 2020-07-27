import React from "react";

// react plugin used to create charts

import '../../assets/css/User.css'

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
        processos:[],

      };
    }

  componentDidMount(){
      
  }
  
  avaliar(){
    let id = "123"
    window.location.replace("avaliar/"+id);
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
                      <th style={{textAlign: "center"}}>Ação</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Projeto 1</td>   
                      <td>Responsável A</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 10.000,00</td>   
                      <td className="detalhes"><Button color='warning' onClick={this.avaliar.bind(this)}>Avaliar</Button></td>
                    </tr>
                    <tr>
                      <td>Projeto 2</td>   
                      <td>Responsável B</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 8.000,00</td>   
                      <td className="detalhes"><Button color='warning' onClick={this.avaliar.bind(this)}>Avaliar</Button></td>
                    </tr>
                    <tr>
                      <td>Projeto 3</td>   
                      <td>Responsável C</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 15.000,00</td>
                      <td className="detalhes"><Button color='warning' onClick={this.avaliar.bind(this)}>Avaliar</Button></td>
                    </tr>     
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