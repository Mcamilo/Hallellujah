import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import NotificationAlert from "react-notification-alert";

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
    Col,
    Label,
    CustomInput
  } from "reactstrap";

export class Child3 extends Component {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect:1,
    },
    visible: true
  };
  notificationAlert = React.createRef();
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
              A imagem foi salva com sucesso!
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    this.notificationAlert.current.notificationAlert(options);
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  saveImage = () => {

  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.props.handleImagemSrc(croppedImageUrl)
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);        
        this.props.handleBlob(blob)
        resolve(this.fileUrl);
      }, {type: 'image/jpeg'});
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    const { values, handleChange, handleImagemSrc } = this.props;
    return (
      <>
      <NotificationAlert ref={this.notificationAlert} />
        <Row style={{paddingTop:"2em"}}>
          <Col md="8" style={{margin:"0 auto"}} >
            <Card className="card-user update ml-auto mr-auto">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/cadastro.png")}
                />
              </div>
            </Card>
          </Col>
          </Row>
          <Row >
          <Col md="8" style={{margin:"0 auto"}}>
            <Card className="card-user loginCard">
              <CardHeader>
                <CardTitle tag="h5">Dados Financeiros</CardTitle>
              </CardHeader>
              <CardBody>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Recursos necessários:</label>
                        <Input
                          placeholder="Estimativa de Rescursos necessários para o projeto"
                          type="text"
                          onChange={handleChange('recursos_necessarios')}
                          defaultValue={values.recursos_necessarios}
                          />
                      </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                      <FormGroup>
                        <label>Pessoal:</label>
                        <Input
                          placeholder="Quantidade de pessoas, remuneração, cadastro"
                          type="textarea"
                          onChange={handleChange('pessoal')}
                          defaultValue={values.pessoal}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Locação de espaço físico:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          onChange={handleChange('locacao')}
                          defaultValue={values.locacao}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Equipamentos:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="text"
                          onChange={handleChange('equipamentos')}
                          defaultValue={values.equipamentos}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Materiais de forma geral:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          onChange={handleChange('materiais')}
                          defaultValue={values.materiais}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label>Outros Custos:</label>
                        <Input
                          placeholder="Tipo, quantidade, valor"
                          type="textarea"
                          onChange={handleChange('outros_custos')}
                          defaultValue={values.outros_custos}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <FormGroup>
                      <Label for="exampleCustomFileBrowser">Imagem de capa do Projeto (máximo 5mb por imagem)</Label>
                      
                      <div className="upload-btn-wrapper">
                        <button className="btnr" title="Clique aqui para selecionar um arquivo">Selecionar Imagem</button>
                        {/* <span>Não há arquivos selecionados</span> */}
                        <input type="file" name="myfile" title="Clique aqui para selecionar um arquivo" accept="image/*" onChange={this.onSelectFile}  />
                      </div>
                      {src && (
                        
                        <Row>  
                          <Col md="8">
                          <ReactCrop
                          src={src}
                          crop={crop}
                          ruleOfThirds
                          circularCrop
                          onImageLoaded={this.onImageLoaded}
                          onComplete={this.onCropComplete}
                          onChange={this.onCropChange}                          
                          />
                          </Col>
                          <Col pl="4" style={{display:"flex",alignItems:"center"}}>
                          <Button
                          color="primary"
                          onClick={() => this.notify("tc")}
                          >Salvar Imagem</Button>
                          </Col>
                        </Row>  
                      )}
                    </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={this.back}
                    >Anterior</Button>

                    <Button
                      color="warning"
                      variant="contained"
                      onClick={this.continue}
                    >Próximo</Button>
                    </div>
                  </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </>
    );
  }
}

export default Child3;
