import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import Confirm from './Confirm';
import Success from './Success';
import api from '../../services/api'

export class ParentForm extends Component {
  state = {
    step: 1,
  };

  componentWillMount(){
    api.get('/projeto/'+this.props.id_projeto).then(res=>{
      this.setState({
        id: this.props.id_projeto,
        status: res.data.status,
        titulo: res.data.titulo,
        responsavel: res.data.responsavel,
        inicio: res.data.d_inicio,
        termino: res.data.d_final,
        caracteristicas: res.data.caracteristicas,
        objetivos_gerais: res.data.objetivos_gerais,
        objetivos_especificos: res.data.objetivos_especificos,
        publico_alvo: res.data.publico_alvo,
        descricao_evangelistica: res.data.descricao_evangelistica,
        instituicao_parceiro: res.data.instituicao_parceiro,
        responsavel_parceiro: res.data.responsavel_parceiro,
        descricao_parceria: res.data.descricao_parceria,
        projetos_andamento: res.data.projetos_andamento,
        contatos: res.data.contatos,
        voluntarios: res.data.voluntarios,
        resultados_esperados: res.data.resultados_esperados,
        recursos_necessarios: res.data.recursos_necessarios,
        pessoal: res.data.pessoal,
        locacao: res.data.locacao,
        equipamentos: res.data.equipamentos,
        materiais: res.data.materiais,
        outros_custos: res.data.outros_custos,
        imagem_url: res.data.imagem_url,
        votos: res.data.votos
    }) 
    
  })
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    
    const { step } = this.state;
    const {
      id,
      titulo,
      responsavel,
      inicio,
      termino,
      caracteristicas,
      objetivos_gerais,
      objetivos_especificos,
      publico_alvo,
      descricao_evangelistica,
      instituicao_parceiro,
      responsavel_parceiro,
      descricao_parceria,
      projetos_andamento,
      contatos,
      voluntarios,
      resultados_esperados,
      recursos_necessarios,
      pessoal,
      locacao,
      equipamentos,
      materiais,
      outros_custos,
      imagem_url,
      status,
      votos
     } = this.state;
    const values = {
    id,
    titulo,
    responsavel,
    inicio,
    termino,
    caracteristicas,
    objetivos_gerais,
    objetivos_especificos,
    publico_alvo,
    descricao_evangelistica,
    instituicao_parceiro,
    responsavel_parceiro,
    descricao_parceria,
    projetos_andamento,
    contatos,
    voluntarios,
    resultados_esperados,
    recursos_necessarios,
    pessoal,
    locacao,
    equipamentos,
    materiais,
    outros_custos,
    imagem_url,
    status,
    votos
  };

    switch (step) {
      case 1:
        return (
          <Child1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Child2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Child3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
       case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default ParentForm;
