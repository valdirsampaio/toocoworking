import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const ServicesCard = ({ service }) => {
    return (
        <>
            <li className={styles.serviceItem}>
                {< service.icon className={styles.serviceIcon} />}
                <p className={styles.serviceTitle}>{ service.title }</p>
            </li>
        </>
    );
};