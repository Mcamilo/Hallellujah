import React from "react";

// react plugin used to create charts
import { Chart } from "react-google-charts";
import DatePicker from "reactstrap-date-picker"

import '../../assets/css/User.css'
import api from '../../services/api'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Row,
  Input,
  Table,Button,
  Col,Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from "reactstrap";

class Resultados extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        projetos:[],
        cronogramas:[],
        projeto:{},
        modal: false,
        cronograma: false,
        tarefa:"",
        inicio:"",
        fim:"",
        modalTitle:"",                
        data : []        
      };
      this.toggle = this.toggle.bind(this);
      this.toggleCronograma = this.toggleCronograma.bind(this);
      
    }
  componentDidMount(){
      api.get('/projetosUser/').then(res=>{
        this.setState({projetos:res.data}) 
      });
      console.log(`Before: ${JSON.stringify(this.state.data)}`)
      
    }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleCronograma() {
    this.setState({
      cronograma: !this.state.cronograma
    });
  }
  modalContent(projeto, cronograma){

    api.get(`/cronograma/${projeto._id}`).then(res=>{
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
        return ["TESTE",cronograma.taskName, "Teste" ,new Date(cronograma.dataInicio), new Date(cronograma.dataFinal), null,100,null]        
      })

      this.setState({data:[ganttHeader,...cronogramas]})      
    })

    this.setState({
      modalTitle: projeto.titulo,
      projeto
    });

    cronograma?this.toggleCronograma():this.toggle()
  }

  postData = e => {
    e.preventDefault();
    const data = new FormData() 
    // Refresh quando der sucesso
    api.post('/cronograma/', {"id_projeto":this.state.projeto._id,"taskName":this.state.tarefa, 'dataInicio': this.state.inicio, 'dataFinal': this.state.fim}).then(res=>{
      if(res.data.message === "ok"){
        console.log(this.state.tarefa)
        alert("Sucesso")
        window.location.reload();
      }else{
        alert("Erro")
      }
    })
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    })
  }
  render() {    
    return (
      <>
        <div className="content">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="ModalProjetos">
         <ModalHeader toggle={this.toggle}>{this.state.modalTitle}</ModalHeader>
         <ModalBody>
         {
            <div >
            <h4>Parecer Final</h4>  
            <ul className="modalObras">
                 <li><b>Avaliador: </b></li>
                 <li><b>Justificativa: </b></li>
            </ul>
            <hr/>
            <h4>Dados sobre o Projeto </h4>
             <ul className="modalObras">
                 <li><b>Título do Projeto: </b>{this.state.projeto.titulo}</li>
                 <li><b>Responsável: </b>{this.state.projeto.responsavel}</li>
                 <li><b>Data Início: </b>{this.state.projeto.d_inicio}</li>
                 <li><b>Data Término: </b>{this.state.projeto.d_final}</li>
                 <li><b>Características do Projeto: </b>{this.state.projeto.caracteristicas}</li>
                 <li><b>Objetivo Geral do Projeto: </b>{this.state.projeto.objetivos_gerais}</li>
                 <li><b>Objetivo(s) Específico(s) do Projeto: </b>{this.state.projeto.objetivos_especificos}</li>
                 <li><b>Público Alvo: </b>{this.state.projeto.publico_alvo}</li>
                 <li><b>Descrição evangelística/social do Projeto: </b>{this.state.projeto.descricao_evangelistica}</li>
             </ul>
             
             <h4>Dados sobre os Parceiros</h4>
             <ul className="modalObras">
                 <li><b>Instituição: </b> {this.state.projeto.instituicao_parceiro} </li>
                 <li><b>Responsável: </b> {this.state.projeto.responsavel_parceiro} </li>
                 <li><b>Descrição da Parceria: </b>{this.state.projeto.descricao_parceria}</li>
                 <li><b>Projetos em andamento: </b>{this.state.projeto.projetos_andamento}</li>
                 <li><b>Contatos: </b>{this.state.projeto.contatos}</li>
                 <li><b>Voluntarios: </b>{this.state.projeto.voluntarios}</li>
                 <li><b>Resultados Esperados: </b>{this.state.projeto.resultados_esperados}</li>
             </ul>

             <h4>Dados Financeiros</h4>
             <ul className="modalObras">
                 <li><b>Recursos necessários: </b>{this.state.projeto.recursos_necessarios}</li>
                 <li><b>Pessoal: </b>{this.state.projeto.pessoal}</li>
                 <li><b>Locação de espaço físico: </b>{this.state.projeto.locacao}</li>
                 <li><b>Equipamentos: </b>{this.state.projeto.equipamentos}</li>
                 <li><b>Materias de forma geral: </b>{this.state.projeto.materiais}</li>
                 <li><b>Outros Custos: </b>{this.state.projeto.outros_custos}</li>
             </ul>
             <h4>Capa</h4>
             
              <Card>
                <img width="40%" src={`https://storage.googleapis.com/instituto-hallelujah-bucket/${this.state.projeto.imagem_url}`} alt="Capa" />
              </Card>
             </div>
         }         
         </ModalBody>
         <ModalFooter>
           <Button color='warning' onClick={this.toggle}>Ok</Button>
         </ModalFooter>
       </Modal>

       <Modal isOpen={this.state.cronograma} toggle={this.toggleCronograma} className="ModalProjetos">
         <ModalHeader toggle={this.toggleCronograma}>Cronograma</ModalHeader>
         <ModalBody>         
         <div className="content">
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
        </div>
        <div>
          <hr/>
                  <h3>Criar Tarefas</h3>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Tarefa</label>
                          <Input
                            // defaultValue="Creative Code Inc."
                            // placeholder="Company"
                            type="text"
                            defaultValue={this.state.tarefa || ''}
                            onChange={e => this.setState({ tarefa: e.target.value })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Início</label>
                          <DatePicker 
                              dateFormat="DD/MM/YYYY"
                              value={this.state.inicio || ''}
                              onChange={e => this.setState({ inicio: e.split('T')[0] })}
                            />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="6">
                        <FormGroup>
                          <label>Fim</label>
                          <DatePicker 
                              dateFormat="DD/MM/YYYY"
                              value={this.state.fim || ''}
                              onChange={e => this.setState({ fim: e.split('T')[0] })}
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
                          onClick={this.postData}
                        >
                          Adicionar Tarefa
                        </Button>
                      </div>
                    </Row>
                  </Form>
        </div>
         </ModalBody>
         <ModalFooter>
           <Button color='warning' onClick={this.toggleCronograma}>Ok</Button>
         </ModalFooter>
       </Modal>

          <Row>
              <Col md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">Seus Projetos Cadastrados</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                  <thead>
                      <tr>
                      {/* <th>#</th> */}
                      <th>Título</th>
                      <th>Responsável</th>
                      <th>Início</th>
                      <th>Término</th>
                      <th>Orçamento</th>
                      <th>Status</th>
                      <th>Cronograma</th>
                      <th style={{textAlign: "center"}}>Detalhes</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                        this.state.projetos.map((projeto,index)=> 
                            <tr key={projeto._id}>
                                <td>{projeto.titulo||"-----"}</td>
                                <td>{projeto.responsavel||"-----"}</td>
                                <td>{projeto.d_inicio||"-----"}</td>
                                <td>{projeto.d_final||"-----"}</td>
                                <td>{projeto.resultados_esperados||"-----"}</td>
                                <td>{projeto.status||"-----"}</td>
                                <td><Button onClick={this.modalContent.bind(this, projeto, true)}>Abrir</Button></td>
                                <td className="detalhes"><Button color='warning' onClick={this.modalContent.bind(this, projeto, false)}>Detalhes</Button></td>
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

export default Resultados;