// import React from 'react';

import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;