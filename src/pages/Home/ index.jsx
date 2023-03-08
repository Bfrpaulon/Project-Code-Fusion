import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CourseInfo from "../components/CourseInfo";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CourseInfo />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
