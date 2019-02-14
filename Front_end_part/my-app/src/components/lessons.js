import React from 'react';

const Lessons = ({lessons_array}) => {

    const lessonsItems = lessons_array.map((lesson, i) =>

        <div class="lessons__item">
             <div class="lessons__counter">{lesson.id}</div>
             <div class="lessons__name">{lesson.name}</div>
             <div class="lessons__content">
                <div class="lessons__field">Date and Time</div>
                <div class="lessons__value">{lesson.date}</div>
             </div>
        </div>

    );

    return (
        <div class="lessons">
            <div class="container">
                <h1>Lessons</h1>

            <div class="lessons__status">
                 <div class="lessons__param">1</div>
                 <p>Technical supports</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">1</div>
                 <p>Technical supports</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">1</div>
                 <p>Technical supports</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">1</div>
                 <p>Technical supports</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">1</div>
                 <p>Technical supports</p>
            </div>
             {lessonsItems}
          </div>
      </div>

    )
};

export default Lessons;