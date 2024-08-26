import React from "react";
import Layout from "./layout";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  );
};

export default Home;
