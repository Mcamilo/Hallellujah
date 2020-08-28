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
                          placeholder="Título"
                          type="text"
                          onChange={handleChange('titulo')}
                          defaultValue={values.titulo}
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Responsável:</label>
                          <Input
                            placeholder="Nome do(a) Responsável:"
                            type="text"
                            onChange={handleChange('responsavel')}
                            defaultValue={values.responsavel}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Data início</label>
                          <Input
                            placeholder="xx/xx/xxxx"
                            type="text"
                            onChange={handleChange('inicio')}
                            defaultValue={values.inicio}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Data término</label>
                          <Input
                            placeholder="xx/xx/xxxx"
                            type="text"
                            onChange={handleChange('termino')}
                            defaultValue={values.termino}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Características do Projeto:</label>
                          <Input
                            placeholder="(Social, Assistencial, Evento, etc.)"
                            type="text"
                            onChange={handleChange('caracteristicas')}
                            defaultValue={values.caracteristicas}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Objetivo Geral do Projeto:</label>
                          <Input
                            placeholder=" (Propósito, Linha de Atuação, Justificativa)"
                            type="text"
                            onChange={handleChange('objetivos_gerais')}
                            defaultValue={values.objetivos_gerais}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Objetivo(s) Específico(s) do Projeto:</label>
                          <Input
                            placeholder="Objetivo"
                            type="text"
                            onChange={handleChange('objetivos_especificos')}
                            defaultValue={values.objetivos_especificos}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Público Alvo:</label>
                          <Input
                            placeholder="Público"
                            type="text"
                            onChange={handleChange('publico_alvo')}
                            defaultValue={values.publico_alvo}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <FormGroup>
                          <label>Descrição evangelística/social do Projeto:</label>
                          <Input
                            placeholder="Descreva brevemente"
                            type="textarea"
                            onChange={handleChange('descricao_evangelistica')}
                            defaultValue={values.descricao_evangelistica}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                      <FormGroup>
                        <label>Voluntarios:</label>
                        <Input
                          placeholder="Nome, contato, etc. Descrição do trabalho voluntário"
                          type="textarea"
                          onChange={handleChange('voluntarios')}
                          defaultValue={values.voluntarios}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Resultados Esperados:</label>
                        <Input
                          placeholder="O que se espera alcançar com esse Projeto"
                          type="text"
                          onChange={handleChange('resultados_esperados')}
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
