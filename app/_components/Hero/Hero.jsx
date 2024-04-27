"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={clsx("hero", styles.hero_bg)}>
        <div data-aos="fade-up" className={clsx("container")}>
          <div className={clsx("row", styles.container_sub)}>
            <div className={clsx("col col--6", styles.hero_content)}>
              <h1 data-aos="fade-up" className={styles.hero_title}>
                Find and Book an Appoinment with our finest craftsmen and
                service people
              </h1>
              <p data-aos="fade-up" className={styles.hero_subtitle}>
                The ability to access millions of well known service experts
                from housing & furnishing in just a click away!
              </p>

              <button className={styles.signInVectorImgBtn}>Book Now</button>
            </div>
            <div
              data-aos="zoom-in-up"
              className={clsx("card col col--6", styles.hero_video_container)}
            >
              <video
                autoPlay
                loop
                playsInline
                muted
                className={styles.hero_video}
                src="/Repair.mp4"
                preload="none"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
