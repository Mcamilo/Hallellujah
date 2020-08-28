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
  Col,Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from "reactstrap";

class Resultados extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        projetos:[],
        projeto:{},
        modal: false,
        modalTitle:""
      };
      this.toggle = this.toggle.bind(this);
    }
  componentDidMount(){
      api.get('/projetosUser/').then(res=>{
        this.setState({projetos:res.data}) 
      })
    }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  modalContent(projeto){
    this.setState({
      modalTitle: projeto.titulo,
      projeto
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
                 <li><b>Título do Projeto: </b>{this.state.projeto.titulo}</li>
                 <li><b>Responsável: </b>{this.state.projeto.responsavel}</li>
                 <li><b>Data Início: </b>{this.state.projeto.d_inicio}</li>
                 <li><b>Data Término: </b>{this.state.projeto.d_final}</li>
                 <li><b>Características do Projeto: </b>{this.state.projeto.caracteristicas}</li>
                 <li><b>Objetivo Geral do Projeto: </b>{this.state.projeto.objetivos_gerais}</li>
                 <li><b>Objetivo(s) Específico(s) do Projeto: </b>{this.state.projeto.objetivos_especificos}</li>
                 <li><b>Público Alvo: </b>{this.state.projeto.publico_alvo}</li>
                 <li><b>Descrição evangelística/social do Projeto: </b>{this.state.projeto.descricao_evangelistica}</li>
             </ul>
             
             <h4>Dados sobre os Parceiros</h4>
             <ul className="modalObras">
                 <li><b>Instituição: </b> {this.state.projeto.instituicao_parceiro} </li>
                 <li><b>Responsável: </b> {this.state.projeto.responsavel_parceiro} </li>
                 <li><b>Descrição da Parceria: </b>{this.state.projeto.descricao_parceria}</li>
                 <li><b>Projetos em andamento: </b>{this.state.projeto.projetos_andamento}</li>
                 <li><b>Contatos: </b>{this.state.projeto.contatos}</li>
                 <li><b>Voluntarios: </b>{this.state.projeto.voluntarios}</li>
                 <li><b>Resultados Esperados: </b>{this.state.projeto.resultados_esperados}</li>
             </ul>

             <h4>Dados Financeiros</h4>
             <ul className="modalObras">
                 <li><b>Recursos necessários: </b>{this.state.projeto.recursos_necessarios}</li>
                 <li><b>Pessoal: </b>{this.state.projeto.pessoal}</li>
                 <li><b>Locação de espaço físico: </b>{this.state.projeto.locacao}</li>
                 <li><b>Equipamentos: </b>{this.state.projeto.equipamentos}</li>
                 <li><b>Materias de forma geral: </b>{this.state.projeto.materiais}</li>
                 <li><b>Outros Custos: </b>{this.state.projeto.outros_custos}</li>
             </ul>
             <h4>Capa</h4>
             
              <Card>
                <img width="40%" src={`https://storage.googleapis.com/instituto-hallelujah-bucket/${this.state.projeto.imagem_url}`} alt="Capa" />
              </Card>
             </div>
         }
         {console.log(this.state.projeto)}
         </ModalBody>
         <ModalFooter>
           <Button color='warning' onClick={this.toggle}>Ok</Button>
         </ModalFooter>
       </Modal>
          <Row>
              <Col md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">Seus Projetos Cadastrados</CardTitle>
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
                      {
                        this.state.projetos.map((projeto,index)=> 
                            <tr key={projeto._id}>
                                <td>{projeto.titulo||"-----"}</td>
                                <td>{projeto.responsavel||"-----"}</td>
                                <td>{projeto.d_inicio||"-----"}</td>
                                <td>{projeto.d_final||"-----"}</td>
                                <td>{projeto.resultados_esperados||"-----"}</td>
                                <td>{projeto.status||"-----"}</td>
                                <td className="detalhes"><Button color='warning' onClick={this.modalContent.bind(this, projeto)}>Detalhes</Button></td>
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

export default Resultados;