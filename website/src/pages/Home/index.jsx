import React, { useContext } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate";
import styles from "./style.module.scss";
import { CarouselCard } from "./CarouselCard";
import { carouselList, commodityList, review, roomsList, servicesList } from "../../scripts/lists";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ServicesCard } from "./ServicesCard";
import { RoomsCard } from "./RoomsCard";
import { CommodityCard } from "./CommodityCard";
import { ReviewCard } from "./ReviewCard";
import { FiArrowDownRight } from "react-icons/fi";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Home = ({ }) => {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <DefaultTemplate>
            <main className={styles.mainArea}>
                <motion.div className={styles.mainContainer}>
                    <section className={styles.mainFirstSection}>
                        <motion.ul 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}className={styles.sectionList}>
                            <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 5000 }} style={{
                                "--swiper-pagination-color": "#ff8000",
                                "--swiper-pagination-bullet-inactive-color": "#999999",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "10px",
                                "--swiper-pagination-bullet-horizontal-gap": "6px",
                                "--swiper-navigation-color": "#000000",
                                "--swiper-pagination-bullet-border-radius": "0px",

                            }}>
                                {
                                    carouselList.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <CarouselCard item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </motion.ul>
                    </section>
                    <section
                        id="services" className={styles.mainSecondSection}>
                        <motion.div
                        initial={{ y: 250, opacity: 0, size: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, type: "spring" }}  className={styles.secondSectionContainer}>
                            <h1 className={styles.secondSectionTitle}>
                                <span>Nossos servi</span>ços
                            </h1>
                            <ul className={styles.servicesList}>
                                {
                                    servicesList.map((service) => {
                                        return <ServicesCard key={service.id} service={service} />
                                    })
                                }
                            </ul>
                        </motion.div>
                    </section>
                    <section id="rooms" className={styles.mainThirdSection}>
                        <motion.div 
                        initial={{ y: 250, opacity: 0, size: 0 }}
                        animate={{ y: -10, opacity: 1 }}
                        transition={{ delay: 3, type: "spring" }} 
                        className={styles.thirdSectionContainer}>
                            <h1 className={styles.thirdSectionTitle}>
                                <span>Nossos espaços priva</span>tivos
                            </h1>
                            <ul className={styles.thirdSectionList}>
                                {
                                    roomsList.map((room) => {
                                        return <RoomsCard key={room.id} room={room} />
                                    })
                                }
                            </ul>
                        </motion.div>
                    </section>
                    <section id="commodity" className={styles.mainFourthSection}>
                        <motion.div
                        initial={{ y: 250, opacity: 0, size: 0 }}
                        animate={{ y: -10, opacity: 1 }}
                        transition={{ delay: 3, type: "spring" }} className={styles.fourthSectionContainer}>
                            <h1 className={styles.fourthSectionTitle}>
                                <span>Comodida</span>des
                            </h1>
                            <ul className={styles.comodityList}>
                                {
                                    commodityList.map((commodity) => {
                                        return <CommodityCard key={commodity.id} commodity={commodity} />
                                    })
                                }
                            </ul>
                        </motion.div>
                    </section>
                    <section className={styles.mainFifthSection}>
                        <motion.div initial={{ y: 250, opacity: 0, size: 0 }}
                        animate={{ y: -10, opacity: 1 }}
                        transition={{ delay: 3, type: "spring" }} className={styles.fifthSectionContainer}>
                            <h1 className={styles.fifthSectionTitle}>
                                <span>Avaliações de clien</span>tes
                            </h1>
                            <ul className={styles.fifthSectionList}>
                                {
                                    review.map((review) => {
                                        return <ReviewCard key={review.time} review={review} />
                                    })
                                }
                            </ul>
                            <div className={styles.fifthSectionButtons}>
                                <a target="_blank" href="https://www.google.com/maps/place/TOO+Escrit%C3%B3rios+Premium+e+Coworking/@-7.1184342,-34.8614309,17z/data=!4m8!3m7!1s0x7acdd63f504aad1:0x37e6c4d353c030be!8m2!3d-7.1184395!4d-34.8568175!9m1!1b1!16s%2Fg%2F11gph9ldj6?entry=ttu" className={styles.buttonWrite}>Escrever avaliação <FiArrowDownRight className={styles.buttonIcon} /></a>
                                <a target="_blank" href="https://www.google.com/maps/place/TOO+Escrit%C3%B3rios+Premium+e+Coworking/@-7.1184342,-34.8614309,17z/data=!4m18!1m9!3m8!1s0x7acdd63f504aad1:0x37e6c4d353c030be!2sTOO+Escrit%C3%B3rios+Premium+e+Coworking!8m2!3d-7.1184395!4d-34.8568175!9m1!1b1!16s%2Fg%2F11gph9ldj6!3m7!1s0x7acdd63f504aad1:0x37e6c4d353c030be!8m2!3d-7.1184395!4d-34.8568175!9m1!1b1!16s%2Fg%2F11gph9ldj6?entry=ttu" className={styles.buttonSeeMore}>Ver mais <FiArrowDownRight className={styles.buttonIcon} /></a>
                            </div>
                        </motion.div>
                    </section>
                </motion.div>
            </main>
        </DefaultTemplate>
    );
};
