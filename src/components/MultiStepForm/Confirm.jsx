import React, { Component } from 'react';
import { ListGroup, ListGroupItem,Button,
Card,
CardHeader,
CardBody,
CardTitle,
FormGroup,
Input,
Row,
Col,
Label,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import api from '../../services/api'

export class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalTitle:"",
      disabled:false
    };
    this.toggle = this.toggle.bind(this);
    this.postData = this.postData.bind(this);
  }

  continue = e => {
    e.preventDefault();
    if (this.state.disabled) {
      return;
    }
    this.setState({disabled: true});
    this.postData()
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  modalContent(){
    console.log("CLICOU")
    this.toggle()
  }

  postData(){
    const data = new FormData() 
    data.append('file', this.props.values.blob)
    data.append('titulo', this.props.values.titulo)
    data.append('responsavel', this.props.values.responsavel)
    data.append('d_inicio', this.props.values.inicio)
    data.append('d_final', this.props.values.termino)
    data.append('caracteristicas', this.props.values.caracteristicas)
    data.append('objetivos_gerais', this.props.values.objetivos_gerais)
    data.append('objetivos_especificos', this.props.values.objetivos_especificos)
    data.append('publico_alvo', this.props.values.publico_alvo)
    data.append('descricao_evangelistica', this.props.values.descricao_evangelistica)
    data.append('instituicao_parceiro', this.props.values.instituicao_parceiro)
    data.append('responsavel_parceiro', this.props.values.responsavel_parceiro)
    data.append('descricao_parceria', this.props.values.descricao_parceria)
    data.append('projetos_andamento', this.props.values.projetos_andamento)
    data.append('contatos', this.props.values.contatos)
    data.append('voluntarios', this.props.values.voluntarios)
    data.append('resultados_esperados', this.props.values.resultados_esperados)
    data.append('recursos_necessarios', this.props.values.recursos_necessarios)
    data.append('pessoal', this.props.values.pessoal)
    data.append('locacao', this.props.values.locacao)
    data.append('equipamentos', this.props.values.equipamentos)
    data.append('materiais', this.props.values.materiais)
    data.append('outros_custos', this.props.values.outros_custos)
    // Refresh quando der sucesso
    api.post('/projetos/', data).then(res=>{
      if(res.data.message === "ok"){
        this.props.nextStep();
      }else{
        alert("Erro de Cadastro")
      }
    })
  }
render(){
  const {
        values: { 
          titulo,
          responsavel,
          inicio,
          termino,
          caracteristicas,
          objetivos_gerais,
          objetivos_especificos,
          publico_alvo,
          descricao_evangelistica,
          instituicao_parceiro,
          responsavel_parceiro,
          descricao_parceria,
          projetos_andamento,
          contatos,
          voluntarios,
          resultados_esperados,
          recursos_necessarios,
          pessoal,
          locacao,
          equipamentos,
          materiais,
          outros_custos,
          imagem_url,
          blob
        }
      } = this.props;
  return (
    <>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className="ModalProjetos">
         <ModalHeader toggle={this.toggle}>Termos de Serviço</ModalHeader>
         <ModalBody>
         <iframe src="https://mcamilo.github.io/Hallellujah/src/assets/files/termos.pdf#toolbar=0" style={{height:"600px", width:"100%"}}></iframe>
         </ModalBody>
         <ModalFooter>
           <Button color='warning' onClick={this.toggle}>Ok</Button>
         </ModalFooter>
    </Modal>
    <Row style={{paddingTop:"2em"}}>
      <Col md="8" style={{margin:"0 auto"}} >
        <Card className="card-user update ml-auto mr-auto">
          <div className="image">
            <img
              alt="..."
              src={require("assets/img/cadastro.png")}
            />
          </div>
        </Card>
      </Col>
      </Row>
      <Row>
        <Col md="8" style={{margin:"0 auto"}}>
          <Card className="card-user loginCard">
            <CardHeader>
              <CardTitle tag="h5">Confirmar Dados</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <ListGroup flush>
                    {/* grupo 1 */}
                    <ListGroupItem><b>Titulo do Projeto: </b>{titulo}</ListGroupItem>
                    <ListGroupItem><b>Responsável: </b>{responsavel}</ListGroupItem>
                    <ListGroupItem><b>Início: </b>{inicio}</ListGroupItem>
                    <ListGroupItem><b>Término: </b>{termino}</ListGroupItem>
                    <ListGroupItem><b>Características: </b>{caracteristicas}</ListGroupItem>
                    <ListGroupItem><b>Objetivos Gerais: </b>{objetivos_gerais}</ListGroupItem>
                    <ListGroupItem><b>Objetivos Específicos: </b>{objetivos_especificos}</ListGroupItem>
                    <ListGroupItem><b>Público Alvo: </b>{publico_alvo}</ListGroupItem>
                    <ListGroupItem><b>Descrição Evangelística: </b>{descricao_evangelistica}</ListGroupItem>
                    <ListGroupItem><b>Voluntarios: </b>{voluntarios}</ListGroupItem>
                    <ListGroupItem><b>Resultados Esperados: </b>{resultados_esperados}</ListGroupItem>
                    {/* grupo 2 */}
                    <ListGroupItem><b>Instituição Parceira: </b>{instituicao_parceiro}</ListGroupItem>
                    <ListGroupItem><b>Responsável Parceiro: </b>{responsavel_parceiro}</ListGroupItem>
                    <ListGroupItem><b>Descrição Parceria: </b>{descricao_parceria}</ListGroupItem>
                    <ListGroupItem><b>Projetos em Andamento: </b>{projetos_andamento}</ListGroupItem>
                    <ListGroupItem><b>Contatos: </b>{contatos}</ListGroupItem>
                    {/* grupo 3 */}
                    <ListGroupItem><b>Recursos Necessários: </b>{recursos_necessarios}</ListGroupItem>
                    <ListGroupItem><b>Pessoal: </b>{pessoal}</ListGroupItem>
                    <ListGroupItem><b>Locação de espaço físico: </b>{locacao}</ListGroupItem>
                    <ListGroupItem><b>Equipamentos: </b>{equipamentos}</ListGroupItem>
                    <ListGroupItem><b>Materiais de forma geral: </b>{materiais}</ListGroupItem>
                    <ListGroupItem><b>Outros Custos: </b>{outros_custos}</ListGroupItem>
                    <ListGroupItem><b>Imagem de Capa: </b> <br/> <img alt="Crop" style={{ maxWidth: '100%' }} src={imagem_url} /></ListGroupItem>

                  </ListGroup>
                </Col>
                </Row>

                <Row>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" onClick={this.modalContent.bind(this)}/>{' '}
                      <span className="termos"> Li e Aceito os Termos descritos no Estatuto da Instituição</span>
                  </Label>
                </FormGroup>
                </Row>
                <Row>
                <div className="update ml-auto mr-auto">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                  >Voltar</Button>
                <Button
                  color="warning"
                  variant="contained"
                  onClick={this.continue}
                  disabled={this.state.disabled}
                >
                  {this.state.disabled ? 'Enviando...' : 'Enviar Cadastro'}
                  </Button>
                </div>
                </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </>
  );
  }
}

export default Confirm;
