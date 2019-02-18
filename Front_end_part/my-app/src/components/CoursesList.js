import React from 'react';

const CoursesList = ({courses_array}) => {

    const coursesItems = courses_array.map((course, i) =>


        <div class="user-courses__item" key={i}>
             <h2>{course.title}</h2>
             <p>{course.descr}</p>
             <a class="user-courses__link" href= {course.link}>Перейти -></a>
        </div>

    );

    return (
        <div class="user-courses">
             <div class="container">
                 <h1>CoursesList</h1>
                 {coursesItems}
             </div>
        </div>
    )
};

export default CoursesList;