import React from "react";
import api from '../../services/api'
import { Chart } from "react-google-charts";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Cronograma extends React.Component {

  componentWillMount(){
      
  }

  render() {
    return (
      <>
        <div className="content">
          <h3>Cronograma</h3>
          <Chart
  width={'100%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Carregando...</div>}
  chartLanguage={'pt-BR'}
  data={[
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Tema' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duração' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    [
      '2020primavera',
      'primavera 2020',
      'primavera',
      new Date(2020, 2, 22),
      new Date(2020, 5, 20),
      null,
      100,
      null,
    ],
    [
      '2020Verão',
      'Verão 2020',
      'Verão',
      new Date(2020, 5, 21),
      new Date(2020, 8, 20),
      null,
      100,
      null,
    ],
    [
      '2020Outono',
      'Outono 2020',
      'Outono',
      new Date(2020, 8, 21),
      new Date(2020, 11, 20),
      null,
      100,
      null,
    ],
    [
      '2020Inverno',
      'Inverno 2020',
      'Inverno',
      new Date(2020, 11, 21),
      new Date(2021, 2, 21),
      null,
      100,
      null,
    ],
    [
      '2021primavera',
      'primavera 2021',
      'primavera',
      new Date(2021, 2, 22),
      new Date(2021, 5, 20),
      null,
      50,
      null,
    ],
    [
      '2021Verão',
      'Verão 2021',
      'Verão',
      new Date(2021, 5, 21),
      new Date(2021, 8, 20),
      null,
      0,
      null,
    ],
    [
      '2021Outono',
      'Outono 2021',
      'Outono',
      new Date(2021, 8, 21),
      new Date(2021, 11, 20),
      null,
      0,
      null,
    ],
    [
      '2021Inverno',
      'Inverno 2021',
      'Inverno',
      new Date(2021, 11, 21),
      new Date(2022, 2, 21),
      null,
      0,
      null,
    ],
    [
      'Futebol',
      'Brasileirão',
      'Esportes',
      new Date(2020, 8, 4),
      new Date(2021, 1, 1),
      null,
      100,
      null,
    ],
    [
      'Volei',
      'Super Liga ',
      'Esportes',
      new Date(2021, 2, 31),
      new Date(2021, 9, 20),
      null,
      14,
      null,
    ],
    
  ]}
  options={{
    height: 400,
    gantt: {
      trackHeight: 30,
    },
    
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        </div>
      </>
    );
  }
}

export default Cronograma;
