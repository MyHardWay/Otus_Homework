import React from 'react';
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import CoursesList from "../components/CoursesList"



const courses_array = [
    {
        title: "course.html",
        link: "/lessons",
        descr: "Description"
    },
    {
        title: "course.html",
        link: "/lessons",
        descr: "Description"
    },
    {
        title: "course.html",
        link: "/lessons",
        descr: "Description"
    }


];





const CoursesPage = () => (
    <>
        <Header />
        <Banner />
        <CoursesList courses_array={courses_array}/>
        <Footer />
    </>
    )


export default CoursesPage;