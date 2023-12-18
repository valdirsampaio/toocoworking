import React, { useState, useContext } from "react"
import styles from "./style.module.scss";
import { MdArrowOutward } from "react-icons/md";

export const CarouselItem = ({ item }) => {
    return (
        <>
            <li className={styles.carouselItem}>
                <img src={item.image} alt="itemImg" className={styles.bannerImg} />
                <section className={styles.mainFirstSectionInfo}>
                    <h2 className={styles.mainFirstSectionTitle}>{item.title}</h2>
                    <p className={styles.mainFirstSectionParagraph}>{item.paragraph}</p>
                    <a href="https://api.whatsapp.com/message/R5N5IFNQIVQBL1?autoload=1&app_absent=0" target="_blank" className={styles.contactButton}>Entrar em contato <MdArrowOutward className={styles.contactButtonIcon} /></a>
                </section>
            </li>
        </>
    );
};