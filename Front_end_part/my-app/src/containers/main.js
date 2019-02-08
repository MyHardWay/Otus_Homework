import React, { Component } from 'react';
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import PopCourses from "../components/pop-courses";
import Teachers from "../components/teachers";


const teachers_array = [
    {
        img: "https://d210i8t551lxm.cloudfront.net/images/contents/000/001/355/original/teacher_teaser.jpg?1504864921",
        fio: "Mikhail Jouravlev",
        company: "IBM",
        position: "Front-end developer"
    },
    {
        img: "https://d210i8t551lxm.cloudfront.net/images/contents/000/001/355/original/teacher_teaser.jpg?1504864921",
        fio: "Mikhail Jouravlev",
        company: "IBM",
        position: "Front-end developer"
    },
    {
        img: "https://d210i8t551lxm.cloudfront.net/images/contents/000/001/355/original/teacher_teaser.jpg?1504864921",
        fio: "Mikhail Jouravlev",
        company: "IBM",
        position: "Front-end developer"
    },
    {
        img: "https://d210i8t551lxm.cloudfront.net/images/contents/000/001/355/original/teacher_teaser.jpg?1504864921",
        fio: "Mikhail Jouravlev",
        company: "IBM",
        position: "Front-end developer"
    }
];


const courses_array = [
    {
        url: "course.html",
        img: "https://cdn-images-1.medium.com/max/1600/1*ZXixptvL4rzkx3EDuj38xw.jpeg",
        descr: "Description"
    },
    {
        url: "course.html",
        img: "https://cdn-images-1.medium.com/max/1600/1*ZXixptvL4rzkx3EDuj38xw.jpeg",
        descr: "Description"
    },
    {
        url: "course.html",
        img: "https://cdn-images-1.medium.com/max/1600/1*ZXixptvL4rzkx3EDuj38xw.jpeg",
        descr: "Description"
    }


];





class MainPage extends Component {
  render() {
  return (
    <div>
        <Header />
        <Banner />
        <PopCourses courses_array={courses_array}/>
        <Teachers teachers_array={teachers_array}/>
        <Footer />
    </div>
    )

  }}


export default MainPage;