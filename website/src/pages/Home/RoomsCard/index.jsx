import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const RoomsCard = ({ room }) => {
    return (
        <>
            <li className={styles.roomsItem}>
                <img src={room.images[1]} alt="itemImg" className={styles.roomImg} />
                <p className={styles.roomTitle}>{room.title}</p>
            </li>
        </>
    );
};