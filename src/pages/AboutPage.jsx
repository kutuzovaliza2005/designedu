import { teachersData, awardsData } from '../data/coursesData';

function AboutPage() {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2 className="sub-title">О нашей школе Designedu</h2>
                <p className="about-text">
                    Designedu — это современное образовательное пространство, созданное практикующими экспертами для тех,
                    кто хочет освоить востребованные творческие и технические профессии с нуля. Мы верим, что дизайн —
                    это не просто картинки, а решение реальных задач бизнеса и пользователей. Наша главная цель — дать
                    вам не просто сухую теорию из книг, а мощный практический фундамент, сильное портфолио из реальных кейсов
                    и уверенность при прохождении первых собеседований.
                </p>

                <h3 className="sub-title" style={{ marginTop: "60px" }}>Наши преподаватели</h3>
                <div className="teachers-grid">
                    {teachersData.map((teacher) => (
                        <div className="teacher-card" key={teacher.id}>
                            <div style={{ width: "110px", height: "110px", margin: "0 auto 20px auto", overflow: "hidden", borderRadius: "50%", border: "2px solid #478BF9" }}>
                                <img src={teacher.avatar} alt={teacher.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <h3>{teacher.name}</h3>
                            <p style={{ color: "#478BF9", fontWeight: "bold", margin: "5px 0 15px 0", fontSize: "0.95rem" }}>
                                {teacher.role}
                            </p>
                            <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.5", textAlign: "center", margin: 0 }}>
                                {teacher.exp}
                            </p>
                        </div>
                    ))}
                </div>

                <h3 className="sub-title" style={{ marginTop: "80px" }}>Наши награды и достижения</h3>
                <div className="teachers-grid">
                    {awardsData.map((award) => (
                        <div className="teacher-card" key={award.id} style={{ textAlign: "left", padding: "30px" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#478BF9", display: "block", marginBottom: "10px" }}>
                {award.year}
              </span>
                            <h4 style={{ fontSize: "1.2rem", margin: "0 0 10px 0", color: "white" }}>{award.title}</h4>
                            <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>{award.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutPage;