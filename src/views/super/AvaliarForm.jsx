import React, { Component } from "react";
import '../../assets/css/Projeto.css'

import { ParentForm } from '../../components/MultiStepAvaliacao/ParentForm'

class AvaliarForm extends Component {
    
    render(){
        console.log(this.props.match.params.id)
        return (
            <>
            <div className="content">
            <ParentForm />
            </div>
            </>
        );
    }
}

export default AvaliarForm;
