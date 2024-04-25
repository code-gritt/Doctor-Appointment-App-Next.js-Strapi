"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";
import image1 from "../../../public/Conference_No_Code_AI.webp";
import image2 from "../../../public/NurseBlue_No_Code_AI.webp";
import image3 from "../../../public/ResearchImg_No_Code_AI.webp";
import Image from "next/image";

const No_Code_Artificial_Intelligence_Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={clsx(styles.container_main, styles.center)}>
        <div className="container">
          <h1 data-aos="fade-up" className={styles.feature_header}>
            How to get started?
          </h1>

          <div className={clsx("row", styles.common_gap)}>
            <div className="col col--6">
              <div
                data-aos="fade-up"
                className={clsx("row", styles.feature_svg)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="40"
                  viewBox="0 0 53 40"
                  fill="none"
                >
                  <path
                    d="M22.4058 15.7098L29.5407 2.88086H43.7145L50.8493 15.7098L43.7145 28.5388H29.5407L22.4058 15.7098Z"
                    stroke="url(#paint0_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M1.71637 30.8044L5.99598 23.1094H14.4593L18.739 30.8044L14.4593 38.4995H5.99598L1.71637 30.8044Z"
                    stroke="url(#paint1_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M6.31403 5.51704L8.5481 1.5H12.9204L15.1545 5.51704L12.9204 9.53407H8.5481L6.31403 5.51704Z"
                    stroke="url(#paint2_linear_738_56399)"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56399"
                      x1="20.6895"
                      y1="1.38086"
                      x2="52.5657"
                      y2="1.38086"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_738_56399"
                      x1="0"
                      y1="21.6094"
                      x2="20.4553"
                      y2="21.6094"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_738_56399"
                      x1="4.59766"
                      y1="0"
                      x2="16.8709"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h1 data-aos="fade-up" className={styles.container_header}>
                Collaborative Requirement Gathering
              </h1>

              <p data-aos="fade-up" className={styles.container_subtitle}>
                Define Your Vision with Us
              </p>

              <p data-aos="fade-up" className={styles.container_arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="324"
                  height="24"
                  viewBox="0 0 324 24"
                  fill="none"
                >
                  <path
                    d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM323.061 13.0607C323.646 12.4749 323.646 11.5251 323.061 10.9393L313.515 1.3934C312.929 0.807611 311.979 0.807611 311.393 1.3934C310.808 1.97919 310.808 2.92893 311.393 3.51472L319.879 12L311.393 20.4853C310.808 21.0711 310.808 22.0208 311.393 22.6066C311.979 23.1924 312.929 23.1924 313.515 22.6066L323.061 13.0607ZM2 13.5H322V10.5H2V13.5Z"
                    fill="url(#paint0_linear_738_56831)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56831"
                      x1="2"
                      y1="12"
                      x2="322"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </p>
            </div>
            <div className="col col--6">
              <div
                data-aos="zoom-in-up"
                className={clsx("row", styles.flex_container)}
              >
                {/* {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))} */}
                <div className={clsx("col", styles.xyz)}>
                  <div className={clsx("", styles.main_container)}>
                    <div className={styles.main}>
                      <div className={styles.img_container}>
                        <Image src={image1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.container_main, styles.center)}>
        <div className="container">
          <div className={clsx("row", styles.common_gap)}>
            <div className="col col--6">
              <div
                data-aos="zoom-in-up"
                className={clsx("row", styles.flex_container)}
              >
                <div className={clsx("col", styles.xyz)}>
                  <div className={clsx("", styles.main_container)}>
                    <div className={styles.main}>
                      <div className={styles.img_container}>
                        <Image src={image2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div
                data-aos="fade-up"
                className={clsx("row", styles.feature_svg)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="40"
                  viewBox="0 0 53 40"
                  fill="none"
                >
                  <path
                    d="M22.4058 15.7098L29.5407 2.88086H43.7145L50.8493 15.7098L43.7145 28.5388H29.5407L22.4058 15.7098Z"
                    stroke="url(#paint0_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M1.71637 30.8044L5.99598 23.1094H14.4593L18.739 30.8044L14.4593 38.4995H5.99598L1.71637 30.8044Z"
                    stroke="url(#paint1_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M6.31403 5.51704L8.5481 1.5H12.9204L15.1545 5.51704L12.9204 9.53407H8.5481L6.31403 5.51704Z"
                    stroke="url(#paint2_linear_738_56399)"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56399"
                      x1="20.6895"
                      y1="1.38086"
                      x2="52.5657"
                      y2="1.38086"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_738_56399"
                      x1="0"
                      y1="21.6094"
                      x2="20.4553"
                      y2="21.6094"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_738_56399"
                      x1="4.59766"
                      y1="0"
                      x2="16.8709"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h1 data-aos="fade-up" className={styles.container_header}>
                Proof-of-Concept Testing
              </h1>

              <p data-aos="fade-up" className={styles.container_subtitle}>
                Validating the Feasibility of Your Vision
              </p>

              <p data-aos="fade-up" className={styles.container_arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="324"
                  height="24"
                  viewBox="0 0 324 24"
                  fill="none"
                >
                  <path
                    d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM323.061 13.0607C323.646 12.4749 323.646 11.5251 323.061 10.9393L313.515 1.3934C312.929 0.807611 311.979 0.807611 311.393 1.3934C310.808 1.97919 310.808 2.92893 311.393 3.51472L319.879 12L311.393 20.4853C310.808 21.0711 310.808 22.0208 311.393 22.6066C311.979 23.1924 312.929 23.1924 313.515 22.6066L323.061 13.0607ZM2 13.5H322V10.5H2V13.5Z"
                    fill="url(#paint0_linear_738_56831)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56831"
                      x1="2"
                      y1="12"
                      x2="322"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.container_main, styles.center)}>
        <div className="container">
          <div className={clsx("row", styles.common_gap)}>
            <div className="col col--6">
              <div
                data-aos="fade-up"
                className={clsx("row", styles.feature_svg)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="40"
                  viewBox="0 0 53 40"
                  fill="none"
                >
                  <path
                    d="M22.4058 15.7098L29.5407 2.88086H43.7145L50.8493 15.7098L43.7145 28.5388H29.5407L22.4058 15.7098Z"
                    stroke="url(#paint0_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M1.71637 30.8044L5.99598 23.1094H14.4593L18.739 30.8044L14.4593 38.4995H5.99598L1.71637 30.8044Z"
                    stroke="url(#paint1_linear_738_56399)"
                    stroke-width="3"
                  />
                  <path
                    d="M6.31403 5.51704L8.5481 1.5H12.9204L15.1545 5.51704L12.9204 9.53407H8.5481L6.31403 5.51704Z"
                    stroke="url(#paint2_linear_738_56399)"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56399"
                      x1="20.6895"
                      y1="1.38086"
                      x2="52.5657"
                      y2="1.38086"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_738_56399"
                      x1="0"
                      y1="21.6094"
                      x2="20.4553"
                      y2="21.6094"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_738_56399"
                      x1="4.59766"
                      y1="0"
                      x2="16.8709"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h1 data-aos="fade-up" className={styles.container_header}>
                Seamless Implementation
              </h1>

              <p data-aos="fade-up" className={styles.container_subtitle}>
                Bringing Your Vision to Life
              </p>

              <p data-aos="fade-up" className={styles.container_arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="324"
                  height="24"
                  viewBox="0 0 324 24"
                  fill="none"
                >
                  <path
                    d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM323.061 13.0607C323.646 12.4749 323.646 11.5251 323.061 10.9393L313.515 1.3934C312.929 0.807611 311.979 0.807611 311.393 1.3934C310.808 1.97919 310.808 2.92893 311.393 3.51472L319.879 12L311.393 20.4853C310.808 21.0711 310.808 22.0208 311.393 22.6066C311.979 23.1924 312.929 23.1924 313.515 22.6066L323.061 13.0607ZM2 13.5H322V10.5H2V13.5Z"
                    fill="url(#paint0_linear_738_56831)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_738_56831"
                      x1="2"
                      y1="12"
                      x2="322"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2F81EC" />
                      <stop offset="1" stop-color="#1BDBF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </p>
            </div>
            <div className="col col--6">
              <div
                data-aos="zoom-in-up"
                className={clsx("row", styles.flex_container)}
              >
                <div className={clsx("col", styles.xyz)}>
                  <div className={clsx("", styles.main_container)}>
                    <div className={styles.main}>
                      <div className={styles.img_container}>
                        <Image src={image3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default No_Code_Artificial_Intelligence_Process;
