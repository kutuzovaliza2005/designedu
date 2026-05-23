import { useState } from 'react';
import './faq.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            q: "Как записаться на курс?",
            a: "Нажмите кнопку «Записаться» на странице курса, заполните форму — и мы свяжемся с вами в течение часа."
        },
        {
            q: "Есть ли рассрочка?",
            a: "Да, мы предлагаем рассрочку на 3, 6 или 12 месяцев без процентов."
        },
        {
            q: "Можно ли получить сертификат?",
            a: "Да, после успешного завершения курса вы получаете именной сертификат."
        },
        {
            q: "Что если не понравится курс?",
            a: "В течение первых 7 дней вы можете вернуть полную стоимость без объяснения причин."
        }
    ];

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Часто задаваемые вопросы</h1>
            {questions.map((item, index) => (
                <div key={index} className="faq-item">
                    <div className="faq-question" onClick={() => toggle(index)}>
                        <span>{item.q}</span>
                        <span className="faq-icon">{openIndex === index ? '▲' : '▼'}</span>
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">
                            {item.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FAQ;