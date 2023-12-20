import { RoomsContext } from '../../../providers/RoomsContext';
import styles from './style.module.scss';
import React, { useContext, useState } from "react";


export const SeeRoomModal = ({ }) => {

    const { setRoomModal, seePhotosRoom } = useContext(RoomsContext)

    const [focusPhoto, setFocusPhoto] = useState(seePhotosRoom.images[0])

    return (
        <div className={styles.overlayBox}>
            <div role="dialog" className={styles.modalCreateBox}>
                <section className={styles.modalHeader}>
                    <span>
                        <h3 className={styles.modalTitle}>{seePhotosRoom.title}</h3>
                        <button aria-label="close" title="Fechar" onClick={() => setRoomModal(false)}>
                            X
                        </button>
                    </span>
                </section>
                <section className={styles.modalMain}>
                    <div className={styles.miniPhotos}>
                        {
                            seePhotosRoom.images.map((photo) => {
                                return <button onClick={() => setFocusPhoto(photo)}><img src={photo} alt="photo" className={styles.roomImg}/></button>
                            })
                        }
                    </div>
                    <img src={focusPhoto} alt="photo" className={styles.focusPhoto}/>
                </section>
            </div>
        </div>
    );
};