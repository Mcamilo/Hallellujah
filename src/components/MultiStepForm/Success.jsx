import React, { Component } from 'react';
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

export class Child2 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Row style={{paddingTop:"10em"}}>
          <Col md="8" style={{margin:"0 auto"}} >
            <Card className="card-user update ml-auto mr-auto">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/hands.png")}
                />
              </div>
            </Card>
          </Col>
          </Row>
          <Row >
          <Col md="8" style={{margin:"0 auto"}}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Sucesso</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                        <h3>Seu projeto será avaliado em breve!</h3>
                    </Col>
                    </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
    );
  }
}

export default Child2;
