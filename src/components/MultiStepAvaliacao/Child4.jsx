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
                  src={require("assets/img/children2.png")}
                />
              </div>
            </Card>
          </Col>
          </Row>
          <Row >
          <Col md="8" style={{margin:"0 auto"}}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Dados Financeiros</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Recursos necessários:</label>
                        <Input
                          placeholder="Estimativa de Rescursos necessários para o projeto"
                          type="text"
                          onChange={handleChange('instituicao')}
                          defaultValue={values.instituicao}
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
                          onChange={handleChange('parceiro_instituicao_responsavel')}
                          defaultValue={values.parceiro_instituicao_responsavel}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Descrição da Parceria:</label>
                        <Input
                          placeholder=""
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
                        <label>Locação de espaço físico:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          onChange={handleChange('publico_alvo')}
                          defaultValue={values.publico_alvo}
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
                          onChange={handleChange('contatos')}
                          defaultValue={values.contatos}
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
                          onChange={handleChange('contatos')}
                          defaultValue={values.contatos}
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
                          onChange={handleChange('voluntarios')}
                          defaultValue={values.voluntarios}
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
                      color="primary"
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
