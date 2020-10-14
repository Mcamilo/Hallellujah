import React from "react";
import api from '../services/api'
import { login } from "../services/auth";
import '../assets/css/Login.css'
import Child1 from '../components/LoginRegisterForm/Child1';
import Child2 from '../components/LoginRegisterForm/Child2';
import Child3 from '../components/LoginRegisterForm/Child3';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        error: "",
        step: 1
      };
      
    handleSignIn = async e => {
          console.log("Login")
          e.preventDefault();
          const { username, password } = this.state;

          if (!username || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
          alert("Preencha e-mail e senha para continuar!")
          } else {
            try {
              // To Do arrumar o login ...
              const response = await api.post("/", { "email":username,"senha": password });
              login(response.data.token, response.data.email);
              const resPapel = await api.get("/autorizacao");
              console.log(resPapel.data.papel)
              if (resPapel.data.papel === 'admin') {
                this.props.history.push("/admin/avaliados");
              } else if(resPapel.data.papel === 'conselheiro'){
                this.props.history.push("/conselho/projetos");
              } else {
                this.props.history.push("/user/cadastrar-projeto");
              }
            } catch (err) {
              alert("Houve um problema com o login, verifique suas credenciais.")
              this.setState({
              error:
                  "Houve um problema com o login, verifique suas credenciais."
              });
          }
          }
      }
    
    handleResetPassword = async e => {
      e.preventDefault()
      console.log("Resetando")
    }

    updateStep = (number) => {
      this.setState({
        step: number
      });
    }
    // Handle fields change
    handleChange = input => e => {
      this.setState({ [input]: e.target.value });
    };
    render(){
      const { step } = this.state;
      switch (step) {
        case 1:
          return (
            <Child1
              updateStep={this.updateStep}
              handleChange={this.handleChange}
              handleSignIn={this.handleSignIn}
            />
          );
        case 2:
          return (
            <Child2
              updateStep={this.updateStep}
              handleChange={this.handleChange}
            />
          );
        case 3:
          return (
            <Child3
              updateStep={this.updateStep}
              handleResetPassword={this.handleResetPassword}
              handleChange={this.handleChange}
            />
          );
        default:
          (console.log('This is a multi-step form built with React.'))
      }
        
    }
}
export default Login;
