import React from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import  style from'./ContactUsForm.module.css'
import ContactUs from "./ContactUsАА";
import emailjs from "emailjs-com";



const ContactUsForm = (props) => {
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_e7effzp', 'template_xzzkf2h', e.target, "user_eMDL2URrYOFE9NXxZtdnw")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  
  return (
    <div>
        <h2 className='text-center'>Напишіть до нас</h2>
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваше ім'я</Form.Label>
            <Form.Control type="text" placeholder="Ваше ім'я" name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваш e-mail адрес</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" name="email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваш номер телефону</Form.Label>
            <Form.Control type="tel" placeholder="+380 (98) 99 99 999 " name="tel"/>
          </Form.Group>
          <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ваше повідомлення</Form.Label>
            <Form.Control as="textarea" rows={3} name="message"/>
          </Form.Group>
          {/*<Form.Group controlId="formFileSm" className="mb-3">*/}
          {/*  <Form.Label>Добавити фото</Form.Label>*/}
          {/*  <Form.Control type="file" size="sm" name="photos"/>*/}
          {/*</Form.Group>*/}
          <Button type='submit' id={style.contactUsFormBtnSubYellow}>
            Відправити
          </Button>
        </Form>
    </div>
  );
};

export default ContactUsForm;