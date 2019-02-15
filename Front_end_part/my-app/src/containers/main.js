import React from 'react';
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import PopCourses from "../components/PopCourses";
import Teachers from "../components/teachers";
import Popup from 'reactjs-popup';
import Chat from "../containers/chat";
import {connect} from 'react-redux'


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



const mapStateToProps = state => ({
  is_poped: state.is_poped,
});



const MainPage = ({is_poped}) => (

            <div>

                <Header />
                <Banner />
                <PopCourses courses_array={courses_array}/>
                <Teachers teachers_array={teachers_array}/>
                <Footer />
                {is_poped ?
                 <Popup open={is_poped}>
                    <Chat />
                  </Popup>
                 : null
                    }

            </div>
        )


export default connect(mapStateToProps)(MainPage);