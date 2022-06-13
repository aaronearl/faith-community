import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Skills />
    <Testimonials />
    <Footer />
  </div>
);

export default IndexPage;
