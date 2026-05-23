import { newsData } from '../data/coursesData';

function NewsPage() {
    // Сортируем новости по дате (новые сверху)
    const sortedNews = [...newsData].sort((a, b) => {
        const dateA = new Date(a.date.split(' ')[0] + ' ' + a.date.split(' ')[1] + ' ' + a.date.split(' ')[2]);
        const dateB = new Date(b.date.split(' ')[0] + ' ' + b.date.split(' ')[1] + ' ' + b.date.split(' ')[2]);
        return dateB - dateA;
    });

    return (
        <div className="page-container">
            <h2 className="section-title">Новости</h2>
            <div className="news-container">
                {sortedNews.map((news) => (
                    <div className="page-card-content" key={news.id} style={{ textAlign: 'left' }}>
                        <div className="news-header">
                            <h3 style={{ color: '#478BF9', marginTop: 0, marginBottom: '10px', fontSize: '1.5rem' }}>
                                {news.title}
                            </h3>
                            <div className="news-meta">
                                <span className="news-date"> {news.date}</span>
                            </div>
                        </div>
                        <p style={{ margin: '15px 0', color: '#ccc' }}>
                            {news.text}
                        </p>
                        <img src={news.image} alt={news.title} className="news-img" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsPage;