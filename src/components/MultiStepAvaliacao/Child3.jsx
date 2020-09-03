import React, { Component } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardImg,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    Label,
    CustomInput
  } from "reactstrap";

export class Child3 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
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
          <Row >
          <Col md="8" style={{margin:"0 auto"}}>
            <Card className="card-user loginCard">
              <CardHeader>
                <CardTitle tag="h5">Dados Financeiros</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Recursos necessários:</label>
                        <Input
                          placeholder="Estimativa de Recursos necessários para o projeto"
                          type="text"
                          defaultValue={values.recursos_necessarios}
                          disabled
                          />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                      <FormGroup>
                        <label>Pessoal:</label>
                        <Input
                          placeholder="Quantidade de pessoas, remuneração, cadastro"
                          type="textarea"
                          defaultValue={values.pessoal}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Locação de espaço físico:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          defaultValue={values.locacao}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Equipamentos:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="text"
                          defaultValue={values.equipamentos}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Materias de forma geral:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          defaultValue={values.materiais}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Outros Custos:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          defaultValue={values.outros_custos}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <FormGroup>
                    <Card>
                        <CardTitle><b>Imagens do Projeto</b></CardTitle>
                      <CardBody>
                        <CardImg top width="100%" src={`https://storage.googleapis.com/instituto-hallelujah-bucket/${values.imagem_url}`} alt="Capa do Projeto" />
                      </CardBody>
                    </Card>
                    </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.back}
                    >Anterior</Button>

                    <Button
                      color="warning"
                      variant="contained"
                      onClick={this.continue}
                    >Próximo</Button>
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

export default Child3;
