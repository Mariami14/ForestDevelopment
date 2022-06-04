import React from 'react';
import Navigation from "../components/Nav";
import VideoSection from "../components/VideoSection";
import AboutUs from "../components/AboutUs/AboutUsElement";
import Advantage from "../components/Advantage";
import References from "../components/References";
import Footer from "../components/Footer";

function Home(props) {
    return (
        <>
            <Navigation/>
            <VideoSection/>
            <AboutUs/>
            <References/>
            <Footer/>
        </>
    );
}

export default Home;
