"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className={clsx("hero", styles.hero_bg_navanAI)}>
        <div className={clsx(styles.container_main, styles.center)}>
          <div className="container">
            <div className={clsx("row", styles.common_gap)}>
              <div className="col col--6">
                <h1 data-aos="fade-up" className={styles.feature_header}>
                  Reach out to know more on how AI can accelerate your business
                </h1>
              </div>
              <div className="col col--6">
                <div data-aos="zoom-in-up" className={styles.formContainer}>
                  <TextField
                    type="text"
                    className={styles.nameInput}
                    id="outlined-basic"
                    label="Please enter your email*"
                    variant="outlined"
                  />

                  <div className={styles.contactFormGrid}>
                    <div>
                      <p>
                        <TextField
                          type="text"
                          className={styles.companyName}
                          id="outlined-basic"
                          label="First name*"
                          variant="outlined"
                        />
                      </p>
                    </div>
                    <div>
                      <p>
                        <TextField
                          type="text"
                          className={styles.companyName}
                          id="outlined-basic"
                          label="Last name*"
                          variant="outlined"
                        />
                      </p>
                    </div>
                  </div>
                  <p className={styles.inlineText}>What is your Profession?*</p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      {" "}
                      <FormControlLabel
                        className={styles.inlineText}
                        control={<Checkbox />}
                        label="Student"
                      />
                    </li>
                    <li>
                      <FormControlLabel
                        className={styles.inlineText}
                        control={<Checkbox />}
                        label="Working Professional - Developer"
                      />
                    </li>
                    <li>
                      <FormControlLabel
                        className={styles.inlineText}
                        control={<Checkbox />}
                        label="Working Professional - Non-Developer"
                      />
                    </li>
                  </ul>

                  <TextField
                    className={styles.textArea}
                    multiline
                    rows={4}
                    maxRows={6}
                    type="text"
                    id="outlined-basic"
                    label="Share your requirement*"
                    variant="outlined"
                  />
                  <button type="submit" className={styles.formButton}>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
