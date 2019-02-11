import React from 'react';

const PopCourses = ({courses_array}) => {

    const coursesItems = courses_array.map((course, i) =>
       <div className="pop-courses__card" key={i}>
            <a href={course.url}><img src={course.img} /></a>
            <span>{course.descr}</span>
       </div>
    );

    return (
          <div className="pop-courses">
          <div className="container">
              <h2>Popular courses</h2>
              {coursesItems}
          </div>
      </div>

    )
};

export default PopCourses;