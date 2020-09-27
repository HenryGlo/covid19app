
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import Header from '../components/header/index'
import AboutUs from "../components/aboutUs/index"
import MapChart from "../components/map/index";
import Footer from "../components/footer/index";

function Application() {
    return (
        <React.Fragment>
            <MapChart />
            <AboutUs />
            <Footer />
        </React.Fragment>
    );
}

export default Application;
