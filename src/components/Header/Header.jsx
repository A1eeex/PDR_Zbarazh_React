import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logoPicture from "./../../assets/img/logo_pdr_zbarazh_big.png"
import './Header.modules.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import TechnologyPage from "../../pages/TechnologyPage";
import PhotoAlbumPage from "../../pages/PhotoAlbumPage";
import ContactPage from "../../pages/ContactPage";
import Footer from "../Footer/Footer";
import './../../App.css'
import PhoneNumber from "../PhoneNumber/PhoneNumber";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className='navBarHeaderBg'>
                <Container>
                    <div className='containerLogoTitleFlex'>
                        <img
                            alt=""
                            src={logoPicture}
                            width="100"
                            // height="60"
                            className="d-inline-block align-top"
                        />{' '}

                        <div className='NavLogoTitle'>
                            PDR_Zbarazh
                        </div>
                    </div>
                    <Navbar.Brand href="/">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={"mr-auto" + " " + "nav-Custom"}>
                            <Nav.Link href="/">Головна</Nav.Link>
                            <Nav.Link href="/technology">Про технологію</Nav.Link>
                            <Nav.Link href="/photoalbum">Фото наших робіт</Nav.Link>
                            <Nav.Link href="/contact">Контакти</Nav.Link>
                        </Nav>
                        {/*<Form inline>*/}
                        {/*<Form.Control className="mr-sm-2"*/}
                        {/*              type="text"*/}
                        {/*              placeholder="Search..."/>*/}
                        {/*<Button variant="outline-info">Search </Button>*/}
                        <PhoneNumber/>
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" render={() => <HomePage/>}/>
                    <div className='wrapper-route'><Route path="/technology" render={() => <TechnologyPage/>}/>
                        <Route path="/photoalbum" render={() => <PhotoAlbumPage/>}/>
                        <Route path="/contact" render={() => <ContactPage/>}/></div>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
};

export default Header;