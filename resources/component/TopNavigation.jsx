import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from '../img/logovauhouse.png';

class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            logoLook:"logo",
            navbarBack: "navBackground",
            navbarItem: "navItem",
        }
    }

    onScroll=()=>{
        if(window.scrollY >100){
            this.setState({logoLook:'logoScroll', navbarBack:'navBackgroundScroll', navbarItem:'navItemScroll'})
        }else if(window.scrollX <100){
            this.setState({logoLook:'logo', navbarBack:'navBackground', navbarItem:'navItem'})
        }
    }

        componentDidMount(){
            window.addEventListener('scroll', this.onScroll)
        }



  render() {
    return (
      <Fragment>
        <Navbar className={this.state.navbarBack} collapseOnSelect fixed="top" expand="lg" variant='dark'>
        <Navbar.Brand href="#home"><img className={this.state.logoLook} src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <Nav className='list'>
            <Nav.Link  className={this.state.navbarItem} href="#deets">HOME</Nav.Link>
            <Nav.Link className={this.state.navbarItem} href="#deets">RÓLUNK</Nav.Link>
            <Nav.Link className={this.state.navbarItem} href="#deets">SZOLGÁLTATÁSOK</Nav.Link>
            <Nav.Link className={this.state.navbarItem} href="#deets">REFERENCIÁK</Nav.Link>
            <Nav.Link className={this.state.navbarItem} href="#deets">KAPCSOLAT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        
      </Fragment>
    )
  }
}

export default TopNavigation
