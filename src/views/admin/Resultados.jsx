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

class Resultados extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        processos:[],
        obras:[],
        modal: false,
        modalTitle:""
      };
      this.toggle = this.toggle.bind(this);
    }

  componentDidMount(){
      
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  modalContent(obras){
    this.setState({
      modalTitle: obras
    });

    this.toggle()
  }
  render() {
    return (
      <>
        <div className="content">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="ModalProjetos">
         <ModalHeader toggle={this.toggle}>{this.state.modalTitle}</ModalHeader>
         <ModalBody>
         {
            <div >
            <h4>Parecer Final</h4>  
            <ul className="modalObras">
                 <li><b>Avaliador: </b></li>
                 <li><b>Justificativa: </b></li>
            </ul>
            <hr/>
            <h4>Dados sobre o Projeto </h4>
             <ul className="modalObras">
                 <li><b>Título do Projeto: </b></li>
                 <li><b>Responsável: </b></li>
                 <li><b>Data Início: </b></li>
                 <li><b>Data Término: </b></li>
                 <li><b>Características do Projeto:: </b></li>
                 <li><b>Objetivo Geral do Projeto: </b></li>
                 <li><b>Objetivo(s) Específico(s) do Projeto: </b></li>
                 <li><b>Público Alvo: </b></li>
                 <li><b>Descrição evangelística/social do Projeto: </b></li>
             </ul>
             
             <h4>Dados sobre os Parceiros</h4>
             <ul className="modalObras">
                 <li><b>Instituição: </b></li>
                 <li><b>Responsável: </b></li>
                 <li><b>Descrição da Parceria: </b></li>
                 <li><b>Projetos em andamento: </b></li>
                 <li><b>Contatos: </b></li>
                 <li><b>Voluntarios: </b></li>
                 <li><b>Resultados Esperados: </b></li>
             </ul>

             <h4>Dados Financeiros</h4>
             <ul className="modalObras">
                 <li><b>Recursos necessários: </b></li>
                 <li><b>Pessoal: </b></li>
                 <li><b>Locação de espaço físico: </b></li>
                 <li><b>Equipamentos: </b></li>
                 <li><b>Materias de forma geral: </b></li>
                 <li><b>Outros Custos: </b></li>
             </ul>
             </div>
         }
         </ModalBody>
         <ModalFooter>
           {/* <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '} */}
           <Button color='warning' onClick={this.toggle}>Ok</Button>
         </ModalFooter>
       </Modal>
          <Row>
              <Col md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">Projetos já avaliados</CardTitle>
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
                      <th style={{textAlign: "center"}}>Detalhes</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Projeto 4</td>   
                      <td>Responsável A</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 20.000,00</td>   
                      <td>Aguardando Avaliação</td>
                      <td className="detalhes"><Button color='warning' onClick={this.modalContent.bind(this,"Projeto 4 - Aguardando Avaliação")}>Detalhes</Button></td>
                    </tr>
                    <tr>
                      <td>Projeto 5</td>   
                      <td>Responsável B</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 18.000,00</td>   
                      <td>Projeto Aceito</td>
                      <td className="detalhes"><Button color='warning' onClick={this.modalContent.bind(this,"Projeto 5 - Projeto Aceito")}>Detalhes</Button></td>
                    </tr>
                    <tr>
                      <td>Projeto 6</td>   
                      <td>Responsável C</td>   
                      <td>01/01/2020</td>   
                      <td>01/01/2021</td>   
                      <td>R$ 5.000,00</td>   
                      <td>Projeto Negado</td>
                      <td className="detalhes"><Button color='warning' onClick={this.modalContent.bind(this,"Projeto 6 - Projeto Negado")}>Detalhes</Button></td>
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

export default Resultados;