import React from "react";
import Hero from "../Components/Hero/Hero";
import MenuSection from "../Components/MenuSection/MenuSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import ContentSection from "../Components/ContentSection/ContentSection";
import TestimonialsSection from "../Components/TestimonialsSection/TestimonialsSection";
import BlogSection from "../Components/BlogSection/BlogSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MenuSection />
      <AboutSection currentPage="home"/>
      <ServicesSection />
      <ContentSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default Home;
