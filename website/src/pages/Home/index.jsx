import React, { useContext } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";
import { CarouselItem } from "./HomeCarousel";
import { carouselList } from "../../scripts/lists";
import { Swiper, SwiperSlide } from 'swiper/react';

export const Home = ({ }) => {

    return (
        <DefaultTemplate>
            <main className={styles.mainArea}>
                <div className={styles.mainContainer}>
                    <ul className={styles.sectionList}>
                        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 5000 }} style={{
                            "--swiper-pagination-color": "#ff8000",
                            "--swiper-pagination-bullet-inactive-color": "#999999",
                            "--swiper-pagination-bullet-inactive-opacity": "1",
                            "--swiper-pagination-bullet-size": "12px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px",
                            "--swiper-navigation-color": "#000000",
                            
                        }}>
                            {
                                carouselList.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <CarouselItem item={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </ul>
                    <section className={styles.mainSecondSection}>

                    </section>
                </div>
            </main>
        </DefaultTemplate>
    );
};
