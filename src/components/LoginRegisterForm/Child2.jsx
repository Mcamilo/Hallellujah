import React, { Component } from 'react';
import api from '../../services/api'

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
  state = {
    email:"",
    senha:"",
    nome:"",
    endereco:"",
    cidade:"",
    pais:"",
    cep:"",
    descricao:""
  };

  logar = e => {
    e.preventDefault();
    this.props.updateStep(1);
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { nome, email, senha, endereco, cidade, pais, cep, descricao, confirmar_senha } = this.state;
    
    if (!nome || !email ||! senha || !endereco || !cidade || !pais || !descricao || !confirmar_senha) {
      alert("Preencha todos os campos necessários")
    }
    else if(senha !== confirmar_senha){
      alert("Senha não confirmada")
    }else {
    try {
        const response = await api.post("/registrar", { 
            nome, 
            email,
            senha,
            endereco,
            cidade, 
            pais, 
            cep, 
            descricao
          });              
        alert("Conta criada com sucesso!")
        window.location.reload(false);

    } catch (err) {
        this.setState({
        error:
            "Houve um problema com o envio, verifique os campos."
        });
    }
    }
}
  render() {
    const { handleChange } = this.props;
    
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
                            onChange={e => this.setState({ nome: e.target.value })}
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
                          <Input 
                            placeholder="Email" 
                            type="email" 
                            onChange={e => this.setState({email: e.target.value})} 
                            />
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
                            onChange={e => this.setState({senha: e.target.value})} 
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
                            onChange={e => this.setState({confirmar_senha: e.target.value})} 
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
                            onChange={e => this.setState({endereco: e.target.value})} 
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
                            onChange={e => this.setState({cidade: e.target.value})} 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            placeholder="País"
                            type="text"
                            onChange={e => this.setState({pais: e.target.value})} 
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>CEP</label>
                          <Input 
                            placeholder="86050-300" 
                            type="text" 
                            onChange={e => this.setState({cep: e.target.value})} 
                            />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Sobre a Organização</label>
                          <Input
                            type="textarea"
                            onChange={e => this.setState({descricao: e.target.value})} 

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
                          onClick={this.handleSignUp}
                        >
                          Cadastrar
                        </Button>
                      </div>
                    </Row>
                  </Form>
              </CardBody>
              <CardFooter>
                <span>Já possui conta? <b onClick={this.logar} style={{cursor: "pointer"}}>Logar</b></span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
    </>
    );
  }
}

export default Child2;
