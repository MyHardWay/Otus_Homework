import React from 'react';

const Statement = ({students_array}) => {

    const studentsItems = students_array.map((student, i) =>

        <div class="statement__item">
             <div class="statement__name inline-list__name">{student.name}</div>
             <div class="statement__content">
                <a>{student.lesson.title}</a>
             </div>
        </div>
    );

    return (
        <div class="statement inline-list">
             <div class="container">
                <h1>Students</h1>
                 {studentsItems}
             </div>
        </div>
    )
};

export default Statement;