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

export class Child2 extends Component {
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
                <CardTitle tag="h5">Dados sobre os parceiros</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Instituição:</label>
                        <Input
                          placeholder="Instituição parceira"
                          type="text"
                          onChange={handleChange('instituicao')}
                          defaultValue={values.instituicao}
                          />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Responsável:</label>
                        <Input
                          placeholder="Nome completo"
                          type="text"
                          onChange={handleChange('parceiro_instituicao_responsavel')}
                          defaultValue={values.parceiro_instituicao_responsavel}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Descrição da parceria:</label>
                        <Input
                          placeholder="Descreva brevemente"
                          type="textarea"
                          onChange={handleChange('descricao_parceria')}
                          defaultValue={values.descricao_parceria}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Projetos em andamento:</label>
                        <Input
                          placeholder="Nomes de Projetos com parceria em andamento"
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
                        <label>Contatos:</label>
                        <Input
                          placeholder="Nome e telefone"
                          type="text"
                          onChange={handleChange('contatos')}
                          defaultValue={values.contatos}
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
                          onChange={handleChange('resultados')}
                          defaultValue={values.resultados}
                        />
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

export default Child2;