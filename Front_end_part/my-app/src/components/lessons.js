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
                 <div class="lessons__param">Начало занятий</div>
                 <p>28 oct 2014</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">Дата выдачи сертификата</div>
                 <p>21 февраля</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">Сдано ДЗ</div>
                 <p>17 из 27</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">Оценка за тест</div>
                 <p>B</p>
            </div>
            <div class="lessons__status">
                 <div class="lessons__param">Календарь</div>
                 <p>Technical supports</p>
            </div>
             {lessonsItems}
          </div>
      </div>

    )
};

export default Lessons;