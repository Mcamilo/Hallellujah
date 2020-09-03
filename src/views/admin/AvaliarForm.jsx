import React, { Component } from "react";
import '../../assets/css/Projeto.css'

import { ParentForm } from '../../components/MultiStepAvaliacao/ParentForm'

class AvaliarForm extends Component {
    
    render(){
        return (
            <>
            <div className="content">
            <ParentForm 
                id_projeto={this.props.match.params.id}
            />
            </div>
            </>
        );
    }
}

export default AvaliarForm;
