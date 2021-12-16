import React from "react";
import Banner from "../Components/About/Banner";
import Section from "../Components/About/Section";
import Philosophy from "../Components/About/Philosophy";
import Counter from "../Components/About/Counter";
import Client from "../Components/About/Client";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const About = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Section />
            <Philosophy />
            <Counter />
            <Client />
            <Footer />
        </>
    )
}

export default About