import React, { useState, useContext } from "react"
import styles from "./style.module.scss";
import { IoIosStar } from "react-icons/io";


export const ReviewCard = ({ review }) => {
    return (
        <>
            <li className={styles.reviewItem}>
                <p className={styles.reviewParagraph}>"{review.text}"</p>
                <div className={styles.reviewUser}>
                    <img src={review.profile_photo_url} alt="userAvatar" className={styles.userAvatar} />
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>{review.author_name}</h3>
                        <p className={styles.userRate}>{review.rating.toFixed(1)} <IoIosStar className={styles.rateIcon}/></p>
                    </div>
                </div>
            </li>
        </>
    );
};