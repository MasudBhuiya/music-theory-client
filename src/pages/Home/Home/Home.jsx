// import React from 'react';
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import useTitle from "../../../Shared/useTitle";
import About from "./About/About";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
            <About></About>
        </div>
    );
};

export default Home;