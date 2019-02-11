import React from 'react';

const Teachers = (props) => {

    const teachersItems = props.teachers_array.map((teacher_, i) =>
       <div className="teachers__card" key={i}>
            <a href='/'><img src={teacher_.img} alt=''/></a>
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


