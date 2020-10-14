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

export class Child3 extends Component {
  state = {
    email: "",
    error: ""
  };

  logar = e => {
    e.preventDefault();
    this.props.updateStep(1);
  };
  
  cadastrar = e => {
    e.preventDefault();
    this.props.updateStep(2);
  };

  render() {
    const { handleChange, handleResetPassword } = this.props;
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
                      <CardTitle tag="h5"> Enviar email de Recuperação </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form onSubmit={handleResetPassword}>
                        {this.state.error && <p>{this.state.error}</p>}
                        <Row>
                          <Col>
                            <FormGroup>
                              <label>Email</label>
                              <Input
                                placeholder="Email de cadastro"
                                type="text"
                                onChange={handleChange('email')}
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
                              Enviar
                            </Button>
                          </div>
                        </Row>
                      </Form>
                    </CardBody>
                    <CardFooter>
                        <span>Já possui conta? <b onClick={this.logar} style={{cursor: "pointer"}}>Logar</b></span>
                        <span style={{float:"right"}}>Não possui conta? <b onClick={this.cadastrar} style={{cursor: "pointer"}}>Cadastre-se</b></span>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
    </>
    );
  }
}

export default Child3;
