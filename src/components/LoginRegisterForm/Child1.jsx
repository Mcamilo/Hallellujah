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
                      <CardTitle tag="h5">Login no sistema Hallellujah</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={this.handleSignIn}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <Row>
                          <Col>
                            <FormGroup>
                              <label>Usuário</label>
                              <Input
                                placeholder="Nome de Usuário"
                                type="text"
                                onChange={e => this.setState({ username: e.target.value })}
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
                                onChange={e => this.setState({password: e.target.value})}
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
                  </Card>
                </Col>
              </Row>
            </Container>
    </>
    );
  }
}

export default Child1;
