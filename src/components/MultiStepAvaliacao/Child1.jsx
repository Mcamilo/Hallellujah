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
                          placeholder="PROJETO 123"
                          type="text"
                          onChange={handleChange('titulo')}
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
                            placeholder="RESPONSÁVEL A"
                            type="text"
                            onChange={handleChange('responsavel')}
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
                            placeholder="27/07/1994"
                            type="text"
                            onChange={handleChange('inicio')}
                            defaultValue={values.inicio}
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Data Término</label>
                          <Input
                            placeholder="10/07/2020"
                            type="text"
                            onChange={handleChange('termino')}
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
                            placeholder="SOCIAL"
                            type="text"
                            onChange={handleChange('caracteristicas')}
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
                            placeholder="OBJETIVO A"
                            type="text"
                            onChange={handleChange('objetivos_gerais')}
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
                            placeholder="OBJETIVO ESPECÍFICO ABC"
                            type="text"
                            onChange={handleChange('objetivos_especificos')}
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
                            placeholder="CRIANÇAS CARENTES"
                            type="text"
                            onChange={handleChange('publico_alvo')}
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
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                            type="textarea"
                            onChange={handleChange('descricao_evangelistica')}
                            defaultValue={values.descricao_evangelistica}
                            disabled
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
