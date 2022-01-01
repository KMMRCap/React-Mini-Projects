import React from "react";
import Header from './../common/Header';
import { Outlet } from 'react-router';
import Navbar from "../components/Flash-Card-App/Navbar";

const FlashCardLanding = () => {
    return (
        <>
            <Header header='Flash Card App' />
            <Navbar />
            <Outlet />
        </>
    );
}

export default FlashCardLanding;