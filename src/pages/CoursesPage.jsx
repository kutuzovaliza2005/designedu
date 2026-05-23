import { useState } from 'react';
import { coursesData } from '../data/coursesData';
import RevealOnScroll from '../components/RevealOnScroll';

function CoursesPage({ onEnroll }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = coursesData.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <article className="article-content">
            <h2 className="section-title">Все курсы</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder=" Поиск курса..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <p className="search-result-count">
                        Найдено курсов: {filteredCourses.length}
                    </p>
                )}
            </div>

            <div className="course-grid">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <RevealOnScroll key={course.id} delay={index * 50}>
                            <div className="course-card">
                                {course.badge && (
                                    <div className={`course-badge badge-${course.badge.includes('Хит') ? 'hit' : course.badge.includes('Новинка') ? 'new' : 'sale'}`}>
                                        {course.badge}
                                    </div>
                                )}
                                <img src={course.img} alt={course.name} />
                                <div className="card-body">
                                    <h3>{course.name}</h3>
                                    <p className="course-info-text">{course.desc}</p>
                                    <div className="price">{course.price}</div>
                                    <button className="btn-enroll" onClick={() => onEnroll(course.name)}>
                                        Записаться на курс
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))
                ) : (
                    <div className="not-found-message">
                        <p> Курс "{searchTerm}" не найден</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="clear-search-btn"
                        >
                            Очистить поиск
                        </button>
                    </div>
                )}
            </div>
        </article>
    );
}

export default CoursesPage;