import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import Confirm from './Confirm';
import Success from './Success';


export class ParentForm extends Component {
  state = {
    step: 1,
    nome: '',
    sobrenome: ''
  };

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
  handleImagemSrc = imgsrc =>{
    this.setState({imagem_url: imgsrc})
  }
  handleBlob = blob =>{
    this.setState({blob})
  }

  render() {
    const { step } = this.state;
    const {
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
      blob
     } = this.state;
    const values = { titulo,
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
    blob
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
            handleImagemSrc={this.handleImagemSrc}
            handleBlob={this.handleBlob}
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
