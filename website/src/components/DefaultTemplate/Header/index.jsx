import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React from "react"
import { MdMenu } from "react-icons/md";
import logo from "../../../assets/too-coworking.png";

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.containerBox}>
                <Link to="/" className={styles.homeButton}>
                    <img src={logo} alt="logoimg" className={styles.projectImage} />
                </Link>
                <section className={styles.buttonSection}>
                    <div className={styles.buttonsContainer}>
                        <Link onClick={() => setLoading(true)} to="/" className={styles.interactionButton}>
                            Home
                        </Link>
                        <Link onClick={() => setLoading(true)} to="/" className={styles.interactionButton}>
                            Sobre nós
                        </Link>
                        <Link onClick={() => setLoading(true)} to="/about" className={styles.interactionButton}>
                            Serviços
                        </Link>
                        <Link onClick={() => setLoading(true)} to="/about" className={styles.interactionButton}>
                            Espaços privativos
                        </Link>
                        <Link onClick={() => setLoading(true)} to="/about" className={styles.interactionButton}>
                            Contato
                        </Link>
                        <Link onClick={() => setLoading(true)} to="/about" className={styles.interactionButton}>
                            Cadastra-se
                        </Link>
                    </div>
                    <div className={styles.responsiveButton}>
                        <button className={styles.buttonsList} ><MdMenu className={styles.listIcon} /> </button>
                    </div>
                </section>
            </div>
        </header >
    );
};