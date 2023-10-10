import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import botImage from "./images/bot.png";
import whatsappbotImage from "./images/whatsapp.png";

const Home = () => {
  return (
    <>
      <div className={style.flex}>
        <li className={style.container}>
          <NavLink to="/chatbot" end className={style.nav}>
            <img src={botImage} alt="" />
            ChatBot
          </NavLink>
        </li>

        <li className={style.container}>
          <NavLink to="/whatsappbot" className={style.nav}>
            <img src={whatsappbotImage} alt="" />
            Whatsapp
          </NavLink>
        </li>
      </div>
    </>
  );
};

export default Home;
