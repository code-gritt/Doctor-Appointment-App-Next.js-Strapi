import React from "react";
import styles from "./styles.module.css";
import { Button, TextField } from "@mui/material";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <>
      <div data-aos="fade-up" className={styles.hero}>
        <h2 className={styles.herotitle}>
          Search <span className={styles.herosearch}>Service People</span>
        </h2>
        <h2 className={styles.herosubsearch}>
          Search your craftsman and Book an appointment in one click
        </h2>

        <div>
          <TextField
            className="dark:bg-white dark:text-white"
            style={{ width: "37%", margin: "auto" }}
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />

          <Button className={styles.signInVectorImgBtn} variant="contained">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
