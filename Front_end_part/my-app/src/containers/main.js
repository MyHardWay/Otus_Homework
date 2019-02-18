import React, {Component} from 'react';
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import PopCourses from "../components/PopCourses";
import Teachers from "../components/teachers";
import Popup from 'reactjs-popup';
import Chat from "../containers/chat";
import {connect} from 'react-redux'
import {PopUp} from '../actions/appActions'


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


const mapDispatchToProps = dispatch => ({
    PopUp: is_poped => dispatch(PopUp(is_poped)),
})


const mapStateToProps = state => ({
  is_poped: state.is_poped,
});



class MainPage extends Component{




    render(){
    return (
        <div>

                <Header />
                <Banner />
                <PopCourses courses_array={courses_array}/>
                <Teachers teachers_array={teachers_array}/>
                <Footer />
                {this.props.is_poped ?
                 <Popup open={this.props.is_poped} onClose={this.props.PopUp}>
                    <Chat />
                  </Popup>
                 : null
                    }

            </div>
    )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);