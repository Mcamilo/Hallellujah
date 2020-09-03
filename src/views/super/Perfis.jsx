import React from "react";

// react plugin used to create charts

import '../../assets/css/User.css'
import api from '../../services/api'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Table,Button,
  Col,
  Form, 
  FormGroup,
  Input
} from "reactstrap";

class Perfis extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        perfis:[],  
        email:"",
        senha:"",
        nome:"",
        confirmar_senha:""    
      };
      this.handleChange = this.handleChange.bind(this);

    }

  componentDidMount(){
    api.get('/perfis/').then(res=>{
      this.setState({perfis:res.data.docs}) 
      console.log(res.data.docs)
    })
  }

  async handleChange(e){
    const profile_id = e.target.id
    const status = e.target.value==="Ativado"?true:false
    
    try {
      const response = await api.post("/updateStatusPerfil", {
        profile_id,
        status
      });
      alert("Atualizado com Sucesso")
      window.location.reload(false);
    } catch (err) {
      alert("Erro"+err)
    }
  }
  
  handleSignUp = async e => {
    e.preventDefault();
    const { nome, email, senha, confirmar_senha } = this.state;
    
    if (!nome || !email ||! senha || !confirmar_senha) {
      alert("Preencha todos os campos necessários")
    }
    else if(senha !== confirmar_senha){
      alert("Senha não confirmada")
    }else {
    try {
        const response = await api.post("/registrarConselheiro", { 
            nome, 
            email,
            senha,
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
    return (
      <>
        <div className="content">
        <Row style={{marginBottom:"1em"}}>
          <Col md="12" style={{margin:"0 auto"}}>
            <Card className="card-user loginCard">
              <CardHeader>
                <CardTitle tag="h5">Cadastrar Conselheiros</CardTitle>
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Nome</label>
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
            </Card>
          </Col>
        </Row>
        <Row>
              <Col md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">Contas Cadastradas</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                  <thead>
                      <tr>
                      {/* <th>#</th> */}
                      <th>Acesso</th>
                      <th>Email</th>
                      <th>Nome</th>
                      <th>Endereco</th>
                      <th>Cidade</th>
                      <th>Pais</th>
                      <th>Cep</th>
                      <th>Descrição</th>
                      <th>Criação</th>
                      <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.perfis.map((perfil,index)=> 
                          <tr key={perfil._id}>
                              <td>{perfil.papel||"-----"}</td>
                              <td>{perfil.email||"-----"}</td>
                              <td>{perfil.nome||"-----"}</td>
                              <td>{perfil.endereco||"-----"}</td>
                              <td>{perfil.cidade||"-----"}</td>
                              <td>{perfil.pais||"-----"}</td>
                              <td>{perfil.cep||"-----"}</td>
                              <td>{perfil.descricao||"-----"}</td>
                              <td>{perfil.createdAt||"-----"}</td>
                              <td><Input type="select" name="select" id={perfil._id} value={perfil.status?"Ativado":"Desativado"} onChange={this.handleChange}>
                                    <option></option>
                                    <option>Ativado</option>
                                    <option>Desativado</option>
                                  </Input></td>
                          </tr>
                          )
                      }
                  </tbody>
              </Table>
              </CardBody>
              </Card>
              </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Perfis;