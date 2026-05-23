import { useState, useEffect } from 'react';
import './ReviewsSlider.css';

const reviewsData = [
    {
        id: 1,
        text: "«Долго сомневалась, стоит ли идти на курс UI/UX дизайна, но это было лучшим решением. Преподаватели из Яндекса дают мощную обратную связь. Уже во время обучения собрала портфолио и нашла первый заказ!»",
        author: "Анна Мельникова",
        course: "Выпускница курса «UI/UX Дизайн»"
    },
    {
        id: 2,
        text: "«Прекрасный курс по 3D-моделированию! Дмитрий объясняет всё на пальцах, от интерфейса Blender до настройки света и рендера. Мои финальные проекты теперь выглядят очень круто.»",
        author: "Иван Зайцев",
        course: "Выпускник курса «3D Моделирование»"
    },
    {
        id: 3,
        text: "«Интенсивная программа, много практики и никакой лишней теории. Motion Design дался не сразу, но благодаря поддержке кураторов в чате я справился со всеми домашками. Рекомендую!»",
        author: "Павел Кравцов",
        course: "Выпускник курса «Motion Design»"
    },
    {
        id: 4,
        text: "«Курс по графическому дизайну превзошел все ожидания. Научилась работать с цветом, композицией и типографикой. Разработала полноценный фирменный стиль для локального бренда с нуля!»",
        author: "Екатерина Попова",
        course: "Выпускница курса «Графический дизайн»"
    },
    {
        id: 5,
        text: "«Огромное спасибо за курс Game Design! Пройти путь от сырой идеи до играбельной механики в Unreal Engine — это незабываемо.»",
        author: "Максим Филатов",
        course: "Выпускник курса «Game Design»"
    },
    {
        id: 6,
        text: "«Цифровая иллюстрация всегда была моим хобби, но здесь я вышла на коммерческий уровень. Освоила стилизацию, работу со сложными кистями.»",
        author: "Ольга Сердюк",
        course: "Выпускница курса «Иллюстрация»"
    }
];

function ReviewsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    // Адаптивное количество слайдов
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(reviewsData.length / slidesPerView);
    const startIndex = currentIndex * slidesPerView;
    const visibleReviews = reviewsData.slice(startIndex, startIndex + slidesPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="reviews-slider-wrapper">
            <div className="reviews-slider-container">
                <button className="slider-arrow prev" onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="reviews-slider-track">
                    {visibleReviews.map((review) => (
                        <div key={review.id} className="review-slide-card">
                            <div className="review-quote-icon">“</div>
                            <p className="review-slide-text">{review.text}</p>
                            <div className="review-slide-author">{review.author}</div>
                            <div className="review-slide-course">{review.course}</div>
                        </div>
                    ))}
                </div>

                <button className="slider-arrow next" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* Точки пагинации */}
            <div className="slider-dots">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReviewsSlider;