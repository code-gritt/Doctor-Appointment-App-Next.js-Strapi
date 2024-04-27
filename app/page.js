"use client";

import { useEffect, useState } from "react";
import ContactForm from "./_components/ContactForm/ContactForm";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import No_Code_Artificial_Intelligence_Process from "./_components/Process/VisionAIsolutions";
import Searchbar from "./_components/Searchbar/Searchbar";
import CategoryList from "./_components/CategoryList/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import BusinessList from "./_components/BusinessList/BusinessList";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  /**
   * Used to get All Category List
   */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <hr />
      <Searchbar />
      <hr />
      <BusinessList businessList={businessList} />
      <hr />
      <No_Code_Artificial_Intelligence_Process />
      <ContactForm />
      <Footer />
    </div>
  );
}
