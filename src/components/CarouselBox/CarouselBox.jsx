import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import title1 from './../../assets/img/home_slider/auto_title1.jpg'
import title2 from './../../assets/img/home_slider/auto_title2.jpg'
import title3 from './../../assets/img/home_slider/auto_title3.jpg'
import style from './CarouselBox.module.css'
import { Container } from "react-bootstrap";
const CarouselBox = () => {
  return (
    <div>
      
      <Carousel interval={null} >
       
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title1}
            alt="First slide"
          />
          
         <Container>
           <div className={style.captionTitleContainer}>
             <div className={style.IntroTitleContainer}>
           <h3>Потрапили під град?</h3>
             </div>
           <p className={style.IntroSubtitle}>Не біда, проводимо всі відновлювальні роботи кузова.</p>
         </div>
         </Container>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title2}
            alt="title2"
          />
          <Container>
            <div className={style.captionTitleContainer}>
              <div className={style.IntroTitleContainer}>
                <p className={style.IntroTitle}>Заощаджуємо </p>
                <p className={style.IntroTitle}>ваш бюджет! </p>
              </div>
            
              <p className={style.IntroSubtitle}>Позбавимо кузов вашого автомобіля від будь-яких вм'ятин,</p>
              <p className={style.IntroSubtitle}>не вдаючись до фарбування, поки ви п'єте чашку кави.</p>
            </div>
          </Container>
         
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title3}
            alt="title3"
          />
    
        <Container>
          <div className={style.captionTitleContainer}>
          <div className={style.IntroTitleContainer}>
            <p className={style.IntroTitle}>Швидко </p>
            <p className={style.IntroTitle}>оцінимо ремонт!</p>
          </div>
            <p className={style.IntroSubtitle}>Час це гроші! Надішліть фото пошкодження кузова </p>
            <p className={style.IntroSubtitle}>вашого автомобіля нам по <b>Telegram</b> або <b>Viber </b></p>
            <p className={style.IntroSubtitle}>і отримаєте миттєвий відповідь </p>
            <p className={style.IntroSubtitle}>докладним описом вартості і часу ремонту. </p>
          </div>
          
        </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBox;