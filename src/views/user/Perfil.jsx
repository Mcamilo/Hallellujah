/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import api from '../../services/api'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  state = {
      nome:"",
      email:"",
      endereco:"",
      cidade:"",
      pais:"",
      cep:"",
      descricao:""
  };
  componentWillMount(){
    api.get('/profileInfo/').then(res=>{
      this.setState({
        nome:res.data.nome,
        email:res.data.email,
        endereco:res.data.endereco,
        cidade:res.data.cidade,
        pais:res.data.pais,
        cep:res.data.cep,
        descricao:res.data.descricao,
      }) 
      console.log(this.state)
    })
  }

  handleUpdate = async e => {
    e.preventDefault();
    
    const { nome, email, senha, endereco, cidade, pais, cep, descricao } = this.state;
    try {
        const response = await api.post("/updateInfo", { 
            nome, 
            email,
            senha,
            endereco,
            cidade, 
            pais, 
            cep, 
            descricao
          });              
        alert("Dados atualizados com sucesso!")
        window.location.reload(false);

    } catch (err) {
        this.setState({
        error:
            "Houve um problema com o envio, verifique os campos."
        });
    }
}
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Nome Organização</label>
                          <Input
                            // defaultValue="Creative Code Inc."
                            // placeholder="Company"
                            type="text"
                            defaultValue={this.state.nome || ''}
                            onChange={e => this.setState({ nome: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Endereço</label>
                          <Input
                            type="text"
                            defaultValue={this.state.endereco || ''}
                            onChange={e => this.setState({endereco: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            type="text"
                            defaultValue={this.state.cidade || ''}
                            onChange={e => this.setState({ cidade: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>País</label>
                          <Input
                            type="text"
                            defaultValue={this.state.pais || ''}
                            onChange={e => this.setState({ pais: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>CEP</label>
                          <Input 
                          type="text" 
                          defaultValue={this.state.cep || ''}
                          onChange={e => this.setState({ cep: e.target.value })}
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
                            placeholder={this.state.descricao}
                            onChange={e => this.setState({ descricao: e.target.value })}
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
                          onClick={this.handleUpdate}
                        >
                          Atualizar Informações
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
