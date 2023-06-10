// import React from 'react';
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import useTitle from "../../../Shared/useTitle";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;