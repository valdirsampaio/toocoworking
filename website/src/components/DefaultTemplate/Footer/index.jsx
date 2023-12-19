import styles from "./style.module.scss";
import React from "react"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



export const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.footerContainer}>
                <section className={styles.contactSection}>
                    <h3 className={styles.contactSectionTitle}><span>Entre em cont</span>ato</h3>
                    <p className={styles.contactSectionContainer}><FaPhoneAlt className={styles.contactSectionIcon} /> <a target="_blank" href="tel:+558399322-6363" className={styles.contactSectionParagraph}>(83) 99322-6363</a></p>
                    <p className={styles.contactSectionContainer}><FaInstagram className={styles.contactSectionIcon} /> <a target="_blank" href="https://www.instagram.com/toocoworking/" className={styles.contactSectionParagraph}>@toocoworking</a></p>
                    <p className={styles.contactSectionContainer}><IoMdMail className={styles.contactSectionIcon} /> <a href="mailto:contato@soutoocoworking.com.br?subject=Contato por meio do site!" target="_blank" className={styles.contactSectionParagraph}>contato@soutoocoworking.com.br</a></p>
                    <p className={styles.contactSectionContainer}><FaLocationDot className={styles.contactSectionIcon} /> <a target="_blank" href="https://www.google.com/maps/dir//TOO+Escrit%C3%B3rios+Premium+e+Coworking+-+Av.+Rio+Grande+do+Sul,+1345,+Ed.+Evolution+Business+Center,+2+andar,+Sala+210,+Av.+Rio+Grande+do+Sul,+1345+-+Estados,+Jo%C3%A3o+Pessoa+-+PB,+58030-021/@-7.1184342,-34.8614309,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7acdd63f504aad1:0x37e6c4d353c030be!2m2!1d-34.8568175!2d-7.1184395?entry=ttu" className={styles.contactSectionParagraph}>Av. Rio Grande do Sul, 1345 - Estados, João Pessoa/PB</a></p>
                </section>
                <section className={styles.locationSection}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15836.260923876978!2d-34.8568175!3d-7.1184395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd63f504aad1%3A0x37e6c4d353c030be!2sTOO%20Escrit%C3%B3rios%20Premium%20e%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1702916156231!5m2!1spt-BR!2sbr"></iframe>
                </section>
            </div>
            <div className={styles.footerCopyright}>
                All rights reserved TOO Coworking © 2023
            </div>
        </footer>
    );
};