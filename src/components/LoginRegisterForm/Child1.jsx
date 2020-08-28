import React, { Component } from 'react';
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  CardFooter
} from "reactstrap";

export class Child1 extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleSignIn } = this.props;
    return (
      <>
        <Container>
              <Row style={{paddingTop:"10em"}}>
                <Col md="8" style={{margin:"0 auto"}} >
                  <Card className="card-user update ml-auto mr-auto">
                    <div className="image">
                      <img
                        alt="..."
                        src={require("assets/img/login.png")}
                      />
                    </div>
                  </Card>
                </Col>
                </Row>
                <Row >
                <Col md="8" style={{margin:"0 auto"}}>
                  <Card className="card-user loginCard">
                    <CardHeader>
                      <CardTitle tag="h5">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={handleSignIn}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <Row>
                          <Col>
                            <FormGroup>
                              <label>Email</label>
                              <Input
                                placeholder="Email de cadastro"
                                type="text"
                                onChange={handleChange('username')}
                              />
                            </FormGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col>
                            <FormGroup>
                              <label htmlFor="exampleInputEmail1">
                                Senha
                              </label>
                              <Input
                                placeholder="Senha"
                                type="password"
                                onChange={handleChange('password')}
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
                              Entrar
                            </Button>
                          </div>
                        </Row>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <span>Não possui conta? <b onClick={this.continue} style={{cursor: "pointer"}}>Cadastre-se</b></span>
                      <span style={{color:"blue", float:"right", cursor:"pointer"}}>Recuperar Senha</span>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
    </>
    );
  }
}

export default Child1;
