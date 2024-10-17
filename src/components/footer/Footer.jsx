import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import openWeatherLogo from "../../assets/openweathermap.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.openWeather}>
        <p>Powered by  </p>
        <a
          href="https://openweathermap.org/api"
          title="Free OpenWeather Api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={openWeatherLogo} alt="openWeather" loading="lazy" />
        </a>
      </div>
      <p className={styles.info}>Designed and Coded By: </p>
      <p>
        <sup>&#169;</sup>
        {currentYear} <span className={styles.myName}> Shayan Azeem</span>
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/shayan-azeem-0798931bb"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/shayan066"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
