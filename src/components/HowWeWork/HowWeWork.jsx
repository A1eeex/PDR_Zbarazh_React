import React from 'react';
import style from "./HowWeWork.module.css"
import { Container } from "react-bootstrap";
import { IoPhonePortrait } from "react-icons/all";
import { GrUserManager } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";

const HowWeWork = () => {
  return (
    <div className={style.bgColor}>
      <Container>
        <h2 className={style.mainWorkTitle}>Як ми працюємо?</h2>
        
        <div className={style.allWorkContainer} >
        <div className={style.workSubContainer}>
          <div className={style.workSubIcon}>
            <IoPhonePortrait />
            <div className={style.workSubtitle}>
              TITLE
              <div className={style.workSubText}>
                SomeText
              </div>
            </div>
          </div>
        </div>
  
        <div className={style.workSubContainer}>
          <div className={style.workSubIcon}>
            <GrUserManager />
            <div className={style.workSubtitle}>
              TITLE
              <div className={style.workSubText}>
                SomeText
              </div>
            </div>
          </div>
        </div>
  
        <div className={style.workSubContainer}>
          <div className={style.workSubIcon}>
          <GiMagnifyingGlass />
            <div className={style.workSubtitle}>
              TITLE
              <div className={style.workSubText}>
                SomeText
              </div>
            </div>
          </div>
        </div>
  
        <div className={style.workSubContainer}>
          <div className={style.workSubIcon}>
            <FaCar />
            <div className={style.workSubtitle}>
              TITLE
              <div className={style.workSubText}>
                SomeText
              </div>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;