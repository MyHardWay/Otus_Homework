import React from 'react';

const Pop_courses = (props) => {

    const coursesItems = props.courses_array.map(course_ =>
       <div className="pop-courses__card">
            <a href={course_.url}><img src={course_.img} ></img></a>
            <span>{course_.descr}</span>
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

export default Pop_courses;