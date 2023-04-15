import React, { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logoPicture from "./../../assets/img/logo_pdr_zbarazh_big.png"
import './Header.modules.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Link} from "react-router-dom";

import Footer from "../Footer/Footer";
import './../../App.css'
import PhoneNumber from "../PhoneNumber/PhoneNumber";

const Header = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className={` header_menu ${scrollPosition > 0 ? ' fixed_header' : ''}` }>
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
                        <Nav className={"mr-auto nav-Custom "}>
                            <Link to="/" className="mx-2">Головна</Link>
                            <Link to="/technology" className="mx-2">Про технологію</Link>
                            <Link to="/photoalbum" className="mx-2">Фото наших робіт</Link>
                            <Link to="/contact" className="mx-2">Контакти</Link>
                        </Nav>
                        {/* <Nav className={"mr-auto" + " " + "nav-Custom"}>
                            <Nav.Link href="/">Головна</Nav.Link>
                            <Nav.Link href="/technology">Про технологію</Nav.Link>
                            <Nav.Link href="/photoalbum">Фото наших робіт</Nav.Link>
                            <Nav.Link href="/contact">Контакти</Nav.Link>
                        </Nav> */}
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
        </div>
    );
};

export default Header;