import { useNavigate } from 'react-router-dom';
import FAQ from '../faq';
import ReviewsSlider from '../components/ReviewsSlider';
import StatsCounter from '../components/StatsCounter';
import RevealOnScroll from '../components/RevealOnScroll';

// Добавляем данные преподавателей
const teachersData = [
    {
        id: 1,
        name: "Алексей Волков",
        role: "Senior UI/UX Designer в Яндекс",
        bio: "Специалист по сложным интерфейсам и когнитивной психологии в дизайне. Опыт более 12 лет.",
        avatar: "АВ"
    },
    {
        id: 2,
        name: "Марина Соколова",
        role: "Art Director / Motion Designer",
        bio: "Создавала визуальные эффекты для крупнейших технологических брендов. Эксперт в After Effects.",
        avatar: "МС"
    },
    {
        id: 3,
        name: "Дмитрий Романов",
        role: "3D Artist / Game Designer",
        bio: "Профессионал в Blender и Unreal Engine. Участвовал в разработке популярных инди-игр.",
        avatar: "ДР"
    },
    {
        id: 4,
        name: "Елена Котова",
        role: "Иллюстратор и Шрифтовой дизайнер",
        bio: "Победитель международных конкурсов каллиграфии. Ведет курс по авторской иллюстрации.",
        avatar: "ЕК"
    }
];

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Designedu" className="animated-logo" />
                <h1>Школа Будущего</h1>
                <p>Освой графический дизайн с нуля до pro уровня под руководством преподавателей.</p>
                <button className="btn-primary" onClick={() => navigate('/courses')} style={{ marginTop: '30px', fontSize: '1.1rem' }}>
                    Начать обучение
                </button>
            </section>

            <RevealOnScroll>
                <StatsCounter />
            </RevealOnScroll>

            <section className="about-section">
                <div className="about-container">
                    <RevealOnScroll>
                        <h2 className="section-title">О нашей школе</h2>
                        <p className="about-text">
                            <strong>Designedu</strong> — это инновационная образовательная платформа, основанная в 2020 году.
                            Мы верим, что дизайн — это не просто картинки, а мощный инструмент решения задач.
                            Наши студенты не просто учат теорию, а создают реальные продукты под присмотром наших преподавателей.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={100}>
                        <h3 className="sub-title">Наши преподаватели</h3>
                    </RevealOnScroll>

                    <div className="teachers-grid">
                        {teachersData.map((teacher, index) => (
                            <RevealOnScroll key={teacher.id} delay={index * 100}>
                                <div className="teacher-card">
                                    <div className="teacher-avatar" style={{ backgroundColor: teacher.id === 1 ? '#0846ff' : teacher.id === 2 ? '#E91E63' : teacher.id === 3 ? '#4CAF50' : '#FF9800' }}>
                                        {teacher.avatar}
                                    </div>
                                    <h4>{teacher.name}</h4>
                                    <p className="teacher-role">{teacher.role}</p>
                                    <p className="teacher-bio">{teacher.bio}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>

                    <RevealOnScroll delay={100}>
                        <h3 className="sub-title" style={{ marginTop: '80px' }}>Отзывы наших студентов</h3>
                        <ReviewsSlider />
                        <FAQ />
                    </RevealOnScroll>
                </div>
            </section>
        </>
    );
}

export default HomePage;