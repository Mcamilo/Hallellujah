import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export class ParentForm extends Component {
  state = {
    step: 1,
    nome: '',
    sobrenome: '',
    username: "",
    password: "",
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
  handleSignIn = async e => {
    console.log("LOGIN")
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
    this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      if(username === "admin" && password === "admin"){
        this.props.history.push("/admin/projetos");
      }else if(username === "user" && password === "user"){
        this.props.history.push("/user/cadastrar-projeto");
      }
    }
}
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

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
      descricao_evangelistica
     } = this.state;
    const values = { titulo,
    responsavel,
    inicio,
    termino,
    caracteristicas,
    objetivos_gerais,
    objetivos_especificos,
    publico_alvo,
    descricao_evangelistica};

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
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default ParentForm;
