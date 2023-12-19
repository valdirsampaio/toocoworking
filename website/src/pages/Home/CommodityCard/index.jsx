import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const CommodityCard = ({ commodity }) => {
    return (
        <>
            <li className={styles.commodityItem}>
                {< commodity.icon className={styles.commodityIcon} />}
                <p className={styles.commodityTitle}>{ commodity.title }</p>
            </li>
        </>
    );
};