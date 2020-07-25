import React, { Component } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";

export class Child2 extends Component {
  
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
                <CardTitle tag="h5">Criar Conta</CardTitle>
              </CardHeader>
              <CardBody>
              <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Nome Organização</label>
                          <Input
                            placeholder="Nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row> 
                    <Row> 
                      <Col md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Endereço de Email
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Senha</label>
                          <Input
                            placeholder="Mais de 6 caractéres"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row> 
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Confirmar Senha</label>
                          <Input
                            placeholder="Confirme a senha digitada acima"
                            type="password"
                          />
                        </FormGroup>
                      </Col>
                    </Row> 
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Endereço</label>
                          <Input
                            placeholder="Endereço"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            placeholder="Cidade"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            placeholder="País"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>CEP</label>
                          <Input placeholder="86050-300" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Sobre a Organização</label>
                          <Input
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="warning"
                          type="submit"
                        >
                          Cadastrar
                        </Button>
                      </div>
                    </Row>
                  </Form>
              </CardBody>
              <CardFooter>
                <span>Já possui conta? <b onClick={this.back} style={{cursor: "pointer"}}>Logar</b></span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
    </>
    );
  }
}

export default Child2;
