import React, { Component } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";

export class Child1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
                <CardTitle tag="h5">Dados sobre o Projeto</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Título do Projeto:</label>
                        <Input
                          placeholder="Carregando..."
                          type="text"
                          defaultValue={values.titulo}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Responsável:</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.responsavel}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Data Início</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.inicio}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Data Término</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.termino}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Características do Projeto:</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.caracteristicas}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Objetivo Geral do Projeto:</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.objetivos_gerais}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Objetivo(s) Específico(s) do Projeto:</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.objetivos_especificos}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Público Alvo:</label>
                          <Input
                            placeholder="Carregando..."
                            type="text"
                            defaultValue={values.publico_alvo}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Descrição evangelística/social do Projeto:</label>
                          <Input
                            placeholder={values.descricao_evangelistica}
                            type="textarea"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                      <FormGroup>
                        <label>Voluntarios:</label>
                        <Input
                          placeholder={values.voluntarios}
                          type="textarea"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Resultados Esperados:</label>
                        <Input
                          placeholder="Carregando..."
                          disabled
                          type="text"
                          defaultValue={values.resultados_esperados}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
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

export default Child1;
