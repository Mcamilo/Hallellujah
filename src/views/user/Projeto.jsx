import React, { Component } from "react";
import api from '../../services/api'
import logo from '../../assets/img/logo.png'
import '../../assets/css/Projeto.css'

import { ParentForm } from '../../components/MultiStepForm/ParentForm'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";

class ProjetoForm extends Component {
    render(){
        return (
            <>
            <ParentForm />
            </>
        );
    }
}

export default ProjetoForm;
