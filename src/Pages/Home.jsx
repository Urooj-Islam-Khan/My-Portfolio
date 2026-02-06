import React from "react";
import Hero from "../Components/Hero/Hero";
import Headline from "../Components/Headline/Headline";
import AboutSnapshot from "../Components/AboutSnapshot/AboutSnapshot";
import SkillsHighlight from "../Components/SkillsHighlight/SkillsHighlight";
import FeaturedProjects from "../Components/FeaturedProjects/FeaturedProjects";
import CallToAction from "../Components/CallToAction/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Headline />
      <AboutSnapshot />
      <SkillsHighlight />
      <FeaturedProjects />
      <CallToAction />
    </>
  );
};

export default Home;
