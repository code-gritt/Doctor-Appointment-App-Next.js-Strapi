import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../Searchbar/styles.module.css";

function CategoryList({ categoryList }) {
  return (
    <>
      <div className={styles.hero}>
        <h2
          style={{ marginBottom: "30px" }}
          data-aos="fade-up"
          className={styles.herotitle}
        >
          <span className={styles.herosearch}> Services</span> we are offering
        </h2>
        <div
          data-aos="zoom-in-up"
          className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
    md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {categoryList.length > 0
            ? categoryList.map((category, index) => (
                <Link
                  href={"/search/" + category.name}
                  key={index}
                  className={`flex flex-col items-center
             justify-center gap-2
             bg-purple-50 p-5 rounded-lg
             cursor-pointer hover:scale-110 transition-all ease-in-out
             `}
                >
                  <Image
                    src={category.icon.url}
                    alt="icon"
                    width={35}
                    height={35}
                  />
                  <h2 className="text-primary">{category.name}</h2>
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[120px]
                w-full bg-slate-200 animate-pulse
                rounded-lg"
                ></div>
              ))}
        </div>
      </div>
    </>
  );
}

export default CategoryList;
