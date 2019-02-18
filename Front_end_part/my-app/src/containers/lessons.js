import React from 'react';
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Lessons from "../components/lessons";



const lessons_array = [
    {
        id: 1,
        name: "Ansible",
        date: "18 oct 2014"
    },
    {
        id: 2,
        name: "SOLID",
        date: "18 oct 2014"
    },
    {
        id: 3,
        name: "DRY",
        date: "18 oct 2014"
    }


];





const LessonsPage = () => (
    <>
        <Header />
        <Banner />
        <Lessons lessons_array={lessons_array}/>
        <Footer />
    </>
    )



export default LessonsPage;