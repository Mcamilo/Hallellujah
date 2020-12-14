import React, { Component } from 'react';
import { ListGroup, ListGroupItem,Button,
Card,
CardHeader,
CardBody,
CardTitle,
FormGroup,
Form,
Input,
Row,
Col,
Label } from 'reactstrap';
import api from '../../services/api'
import { Chart } from "react-google-charts";

export class Confirm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voted:"",
      deliberacao:"",
      voto:"",
      data:[]
    };
    
  }
  componentWillMount(){
    api.post('/checkVote/',{id_projeto:this.props.values.id}).then(res=>{
      if(res.data.votos.length>0){
        this.setState({voted:res.data.votos[0]}) 
      }else{
        this.setState({voted:false})
      }
    })
    api.get(`/cronograma/${this.props.values.id}`).then(res=>{
      const ganttHeader = [
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Tema' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duração' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
      ]


      const cronogramas = res.data.cronogramas.map(cronograma=>{
        return [cronograma.taskName, cronograma.taskName, cronograma.taskName, new Date(cronograma.dataInicio), new Date(cronograma.dataFinal), null, 0, null]        
      })

      this.setState({data:[ganttHeader,...cronogramas]})      
    })
  }
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  handleSubmit = async e => {
    console.log("Avaliando...")
    const {deliberacao, voto} = this.state
    console.log(`Deliberação: ${deliberacao} -- Voto: ${this.state.voto} -- Id Projeto ${this.props.values.id}`)
    try {
      const response = await api.post("/avaliarProjeto", { 
          "id_projeto":this.props.values.id,
          "justificativa":deliberacao, 
          "voto":voto
        });       
      console.log(response)       
      alert("Avaliação salva com sucesso!")
      this.props.nextStep();

  } catch (err) {
      alert(err)
      this.setState({
      error:
          "Houve um problema com o envio, verifique os campos."
      });
  }
  }
  
render(){
  const {
        values: { titulo,
        responsavel,
        inicio,
        termino,
        descricao_evangelistica,
        status,
        votos }
      } = this.props;
      console.log("DATA"+JSON.stringify(this.state.data))
  return (
    <>
    <Row style={{paddingTop:"2em"}}>
      <Col md="12" style={{margin:"0 auto"}} >
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
      <Row>
        <Col md="12" style={{margin:"0 auto"}}>
          <Card>
            <CardHeader>
              <CardTitle tag="h5">Resumo do Projeto</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <ListGroup flush>
                    <ListGroupItem><b>Status do Projeto: </b>{status}</ListGroupItem>
                    <ListGroupItem><b>Titulo do Projeto: </b>{titulo}</ListGroupItem>
                    <ListGroupItem><b>Responsável: </b>{responsavel}</ListGroupItem>
                    <ListGroupItem><b>Início: </b>{inicio}</ListGroupItem>
                    <ListGroupItem><b>Término: </b>{termino}</ListGroupItem>
                    <ListGroupItem><b>Descrição Evangelística: </b>{descricao_evangelistica}</ListGroupItem>
                  </ListGroup>
                </Col>
                </Row>
                <Row>
                {
                  this.state.data.length>1?
                  <Col md="12" style={{margin:"0 auto"}}>
                  

                  <h3>Cronograma</h3>
                  <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="Gantt"
                    loader={<div>Carregando...</div>}
                    chartLanguage={'pt-BR'}
                    data={this.state.data}
                    options={{
                      height: 400,
                      gantt: {
                        trackHeight: 30,
                      },
                      
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />
                </Col>:<span></span>
                }
                </Row>
                <br></br>
                <h5>Avaliações</h5>
                  {
                    votos.map((voto, index)=>
                      <Row key={voto._id} style={{margin:"1em 0"}}>
                        <Col md="12" style={{margin:"0 auto"}}>
                        <Card style={{backgroundColor:"#ffecc4"}}>
                          <CardHeader>
                            <CardTitle tag="h5"><b>Voto de {voto.nome_conselheiro}</b></CardTitle>
                          </CardHeader>
                          <CardBody>
                          <ul className="modalObras">
                              <li><b>Voto: </b>{voto.voto}</li>
                              <li><b>Deliberações: </b>{voto.justificativa}</li>
                          </ul>
                          </CardBody>
                        </Card>
                        </Col>
                      </Row>
                    )
                    
                  }
                
                {/* Salvar Voto */}
                <Row style={{display: status==="Votação"?"block":"none" }}>
                    <Col>
                    <div style={{display: this.state.voted.voto?"block":"none" }}>
                      <br></br>
                      <h5>O seu voto já foi salvo</h5>
                    </div>
                    <div style={{display: this.state.voted.voto?"none":"block"}}>
                    <FormGroup tag="fieldset">
                      <legend>Avaliar Projeto</legend>
                      <Input type="select" name="select" value = { this.state.voto} onChange={e=>this.setState({voto: e.target.value})}>
                        <option></option>
                        <option>Aprovado</option>
                        <option>Rejeitado</option>
                        <option>Revisar</option>
                      </Input>
                    </FormGroup>
                    </div>
                    </Col>
                </Row>
                <Row style={{display: status==="Deliberação"?"block":"none" }}>
                    <Col>
                    <div style={{display: this.state.voted.justificativa?"block":"none" }}>
                      <br></br>
                      <h5>A sua Deliberação já foi salva</h5>
                    </div>

                    <div style={{display: this.state.voted.justificativa?"none":"block"}}>
                      <FormGroup>
                        <label>Deliberação:</label>
                        <Input
                          placeholder=""
                          type="textarea"
                          onChange={e => this.setState({deliberacao: e.target.value})} 
                        />
                      </FormGroup>
                      </div>
                    </Col>
                </Row>
                <Row>
                <div className="update ml-auto mr-auto">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                  >Voltar</Button>
                <Button
                  style={{display: (status==="Deliberação" && !this.state.voted.justificativa)||(status==="Votação" && !this.state.voted.voto && this.state.voto)?"initial":"none"}}
                  color="warning"
                  variant="contained"
                  onClick={this.handleSubmit}
                >Enviar Avaliação</Button>
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

export default Confirm;
