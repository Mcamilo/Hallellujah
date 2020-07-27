import React from "react";
import api from '../services/api'
import { login } from "../services/auth";
import '../assets/css/Login.css'
import Child1 from '../components/LoginRegisterForm/Child1';
import Child2 from '../components/LoginRegisterForm/Child2';

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
          console.log(this.state)

          if (!username || !password) {
          this.setState({ error: "Preencha e-mail e senha para continuar!" });
          } else {
            if(username === "conselho" && password === "hallelujah2020"){
              this.props.history.push("/conselho/projetos");
            }else if(username === "user" && password === "hallelujah2020"){
              this.props.history.push("/user/cadastrar-projeto");
            }
            else if(username === "sadmin" && password === "hallelujah2020"){
              this.props.history.push("/sadmin/projetos")
            }
          }
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
    render(){
      const { step } = this.state;
      switch (step) {
        case 1:
          return (
            <Child1
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleSignIn={this.handleSignIn}
            />
          );
        case 2:
          return (
            <Child2
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          );
        default:
          (console.log('This is a multi-step form built with React.'))
      }
        
    }
}
export default Login;
