import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import smallDogIcon from '../img/smalldog.png';
import mediumDogIcon from '../img/mediumdog.png';
import bigDogIcon from '../img/bigdog.png';
import '../css/topBanner.css';
import '../css/bootstrap.min.css';

class Service extends Component {
  render() {
     return (
        <Fragment>
            <Container className='text-center'>
                <h1 className='serviceMainTitle'>SZOLGÁLTATÁSOK</h1>
                <div className='bottom'></div>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <h3 className='serviceName'>Kis testű kuyta</h3>
                        <p className='serviceDetail'> &lt; mint 10 kg</p>
                        <img className='smallDog' src={smallDogIcon} />
                        
                    </div>   
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <h3 className='serviceName'>Közepes testű kuyta</h3>
                        <p className='serviceDetail'> 11 - 26 kg</p>
                        <img className='mediumDog' src={mediumDogIcon} />
                       
                    </div> 
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <h3 className='serviceName'>Nagy testű kuyta</h3>
                        <p className='serviceDetail'> 27 - 45 kg</p>
                        <img className='bigDog' src={bigDogIcon} />
                      
                    </div> 
                    </Col>
                </Row>
            </Container>

        </Fragment>
    )
  }
}

export default Service
