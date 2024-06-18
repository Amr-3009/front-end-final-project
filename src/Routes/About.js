import React from "react";
import TestimonialsSection from "../Components/TestimonialsSection/TestimonialsSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import AboutSection2 from "../Components/AboutPage/AboutSection2/AboutSection2";
import AboutSection3 from "../Components/AboutPage/AboutSection3/AboutSection3";

const About = () => {
  return (
    <>
      <AboutSection currentPage="about" />
      <AboutSection2 />
      <AboutSection3 />
      <TestimonialsSection />
    </>
  );
};

export default About;
