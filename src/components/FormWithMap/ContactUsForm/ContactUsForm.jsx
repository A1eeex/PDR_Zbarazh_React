import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import  style from'./ContactUsForm.module.css'


const ContactUsForm = (props) => {
  return (
    <div>
    
        <h2 className='text-center'>Напишіть до нас</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваш e-mail адрес</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ваше ім'я</Form.Label>
            <Form.Control type="text" placeholder=""/>
          </Form.Group>
          <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ваше повідомлення</Form.Label>
            <Form.Control as="textarea" rows={3}/>
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Добавити фото</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
          <Button type='submit' id={style.contactUsFormBtnSubYellow}>
            Відправити
          </Button>
        </Form>
    </div>
  );
};

export default ContactUsForm;