import React, { Component } from 'react';
import { Button, Card, Col, Row, Table } from 'react-materialize';
import { Link } from 'react-router-dom';

class Principal extends Component {

    render() {

        return (
            <div className="Principal" >
                <Row>
                    <Col m={6} s={6}>
                        <Card id="free" className='grey lighten-5' textclassname='grey-text' title='Suscripción Gratuita' actions={[<Link to={{
                            pathname: '/registro',
                            state: 'free'
                        }}> <Button class="btn waves-effect waves-light" type="submit" name="action">
                        <i class="material-icons right"></i>
                                Obten tu suscripción gratuita </Button></Link>]}>
<Table>
  <thead>
    <tr>
      <th data-field="id">Beneficios</th>
      <th data-field="name">Disponibilidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Contenidos gratuitos</td>
      <td><i className="material-icons">lock_open</i></td>
    </tr>
    <tr>
      <td>Contenidos FOX</td>
      <td><i className="material-icons">lock</i></td>
    </tr>
    <tr>
      <td>Contenidos HBO</td>
      <td><i className="material-icons">lock</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                    <Col m={6} s={6}>
                        <Card id="premium" className='grey lighten-5' textclassname='grey-text' title='Suscripción Premium' actions={[<Link to={{
                            pathname: '/registro',
                            state: 'premium'
                        }}><Button class="btn waves-effect waves-light" type="submit" name="action">
                                Obten tu suscripción Premium </Button></Link>]}>
                                <Table>
  <thead>
    <tr>
      <th data-field="id">Beneficios</th>
      <th data-field="name">Disponibilidad</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Contenidos gratuitos</td>
      <td><i className="material-icons">lock_open</i></td>
    </tr>
    <tr>
      <td>Contenidos FOX</td>
      <td><i className="material-icons">lock_open</i></td>
    </tr>
    <tr>
      <td>Contenidos HBO</td>
      <td><i className="material-icons">lock_open</i></td>
    </tr>
  </tbody>
</Table>
    </Card>
                    </Col>
                
  </Row>
            </div>
        );
    }
}

export default Principal