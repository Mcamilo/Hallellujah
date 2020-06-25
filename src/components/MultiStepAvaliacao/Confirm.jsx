import React, { Component } from 'react';
import { ListGroup, ListGroupItem,Button,
Card,
CardHeader,
CardBody,
CardTitle,
FormGroup,
Form,
Input,
Row,
Col,
Label } from 'reactstrap';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
render(){
  const {
        values: { titulo,
        responsavel,
        inicio,
        termino,
        caracteristicas,
        objetivos_gerais,
        objetivos_especificos,
        publico_alvo,
        descricao_evangelistica }
      } = this.props;
  return (
    <>
    <Row style={{paddingTop:"2em"}}>
      <Col md="8" style={{margin:"0 auto"}} >
        <Card className="card-user update ml-auto mr-auto">
          <div className="image">
            <img
              alt="..."
              src={require("assets/img/children2.png")}
            />
          </div>
        </Card>
      </Col>
      </Row>
      <Row>
        <Col md="8" style={{margin:"0 auto"}}>
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Confirmar Dados</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <ListGroup flush>
                    <ListGroupItem><b>Titulo do Projeto: </b>{titulo}</ListGroupItem>
                    <ListGroupItem><b>Responsável: </b>{responsavel}</ListGroupItem>
                    <ListGroupItem><b>Início: </b>{inicio}</ListGroupItem>
                    <ListGroupItem><b>Término: </b>{termino}</ListGroupItem>
                    <ListGroupItem><b>Características: </b>{caracteristicas}</ListGroupItem>
                    <ListGroupItem><b>Objetivos Gerais: </b>{objetivos_gerais}</ListGroupItem>
                    <ListGroupItem><b>Objetivos Específicos: </b>{objetivos_especificos}</ListGroupItem>
                    <ListGroupItem><b>Público Alvo: </b>{publico_alvo}</ListGroupItem>
                    <ListGroupItem><b>Descrição Evangelística: </b>{descricao_evangelistica}</ListGroupItem>
                  </ListGroup>
                </Col>
                </Row>

                <Row>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox"/>{' '}
                      Li e Aceito os termos descritos no Estatuto da Instituição
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
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >Enviar Cadastro</Button>
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
