import styles from "./style.module.scss";
import React from "react"
import { MdMenu } from "react-icons/md";
import logo from "../../../assets/too-coworking.png";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export const Header = () => {

    return (
        <nav className={styles.header}>
            <div className={styles.containerBox}>
                <Link to="/" className={styles.homeButton}>
                    <img src={logo} alt="logoimg" className={styles.projectImage} />
                </Link>
                <section className={styles.buttonSection}>
                    <div className={styles.buttonsContainer}>
                        <Link to="services"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className={styles.interactionButton}>
                            Serviços
                        </Link>
                        <Link to="rooms"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className={styles.interactionButton}>
                            Espaços privativos
                        </Link>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500} className={styles.interactionButton}>
                            Contato
                        </Link>
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd792bVXP251K1AA6vv8-IdC5slqDj0MOgwP6Of4GvuSFLXzQ/viewform" className={styles.interactionButton}>
                            Cadastra-se
                        </a>
                    </div>
                    <div className={styles.responsiveButton}>
                        <button className={styles.buttonsList} ><MdMenu className={styles.listIcon} /> </button>
                    </div>
                </section>
            </div>
        </nav >
    );
};