function ContactsPage() {
    return (
        <div className="page-container">
            <h2 className="section-title">Контакты</h2>
            <div className="page-card-content" style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                <p><strong>Воронько Елизавета Сергеевна</strong><br />Email: evoronko@sfedu.ru</p>
                <p style={{ marginTop: '15px' }}><strong>Кутузова Елизавета Владимировна</strong><br />Email: kutuzo@sfedu.ru</p>
                <p style={{ marginTop: '15px' }}><strong>Котлубаева Алиса Михайловна</strong><br />Email: kotlubaeva@sfedu.ru</p>
                <p style={{ marginTop: '15px' }}><strong>Раскатова Анастасия Евгеньевна</strong><br />Email: raskatova@sfedu.ru</p>

                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #333' }}>
                    <h3 style={{ marginBottom: '20px', color: '#FFFFFF' }}>Мы в соцсетях</h3>
                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://vk.com/" target="_blank" rel="noopener noreferrer"
                           style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', transition: 'transform 0.2s' }}
                           onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                           onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145813.png" alt="VK" style={{ width: '30px', height: '30px' }} />
                            <span>ВКонтакте</span>
                        </a>

                        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer"
                           style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', transition: 'transform 0.2s' }}
                           onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                           onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" style={{ width: '30px', height: '30px' }} />
                            <span>Telegram</span>
                        </a>

                        <a href="https://max.ru/" target="_blank" rel="noopener noreferrer"
                           style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', transition: 'transform 0.2s' }}
                           onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                           onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Max_logo_2025.png" alt="MAX" style={{ width: '30px', height: '30px' }} />
                            <span>MAX</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;