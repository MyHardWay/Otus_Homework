import React from 'react';

const Teachers = (props) => {

    const teachersItems = props.teachers_array.map((teacher_) =>
       <div className="teachers__card">
            <a><img src={teacher_.img}></img></a>
                <div className="card__fio">{teacher_.fio}</div>
                <div className="card__company">{teacher_.company}</div>
                <div className="card__position">{teacher_.position}</div>
       </div>
    );

    return (
         <div className="teachers">
          <div className="container">
              <h2>Teachers</h2>
              {teachersItems}
          </div>
      </div>

    )
};

export default Teachers;


