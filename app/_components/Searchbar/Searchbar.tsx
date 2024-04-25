import React from "react";
import styles from "./styles.module.css";
import { Button, TextField } from "@mui/material";

const Searchbar = () => {
  return (
    <>
      <div data-aos="fade-up" className={styles.hero}>
        <h2 className={styles.herotitle}>
          Search <span className={styles.herosearch}>Doctors</span>
        </h2>
        <h2 className={styles.herosubsearch}>
          Search your Doctor and Book an appointment in one click
        </h2>
        <div className={styles.searchflex}>
          <TextField
            style={{ width: "50%", margin: "auto" }}
            id="outlined-basic"
            label="Search"
            variant="standard"
          />

          <Button className={styles.signInVectorImgBtn} variant="contained">
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
