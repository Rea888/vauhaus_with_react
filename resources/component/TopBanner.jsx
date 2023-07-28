import React, {Component, Fragment} from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import '../css/topBanner.css';
import '../css/bootstrap.min.css';

class TopBanner extends Component{
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topFixedBanner p-0'>
            <div className='topBannerOverlay'>
            <Container className='topContent'>
                <Row>
            <Col className='text-center'>
            <h4 className='topSubTitle'>Kiemelkedő gondozást nyújtunk négylábú kedvencének!</h4>
            <h1 className='topTitle'>Vauhouse</h1>
            <Button variant='primary'>Info</Button>

            </Col>
                </Row>
            </Container>
            </div>
                </Container>

            </Fragment>
        )
    }
}

export default TopBanner