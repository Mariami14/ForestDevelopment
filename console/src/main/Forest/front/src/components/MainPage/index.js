import React, {useContext} from 'react';

import Nav from "../Nav";
import VideoSection from "../VideoSection";
import AboutUs from "../AboutUs/AboutUsElement";
import References from "../References";
import Footer from "../Footer";
import Navigation from "../Nav";
import AuthContext from "../../context/AuthProvider";


const MainPage = () => {


    return (
        <>

            <Navigation />
            <VideoSection />
            <AboutUs/>
            <References/>
            <Footer/>

        </>
    );
};

export default MainPage;
