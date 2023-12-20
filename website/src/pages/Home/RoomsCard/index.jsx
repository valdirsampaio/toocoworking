import React, { useState, useContext } from "react"
import styles from "./style.module.scss";
import { RoomsContext } from "../../../providers/RoomsContext";

export const RoomsCard = ({ room }) => {

    const { setPhotoRoom, setRoomModal } = useContext(RoomsContext)

    const setModal = (room) => {
        setPhotoRoom(room);
        setRoomModal(true);
    }

    return (
        <>
            <li className={styles.roomsItem}>
                <button onClick={() => setModal(room)} >
                    <img src={room.images[1]} alt="itemImg" className={styles.roomImg} />
                    <p className={styles.roomTitle}>{room.title}</p>
                </button>
            </li>
        </>
    );
};