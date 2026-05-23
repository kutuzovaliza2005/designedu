import { coursesData } from '../data/coursesData';

function BuyModal({ selectedCourse, setSelectedCourse, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Оставить заявку</h2>
                <hr />
                <form className="buy-form" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); onClose(); }}>
                    <div className="input-group">
                        <label>Ваше имя</label>
                        <input type="text" placeholder="Иван Иванов" required />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="example@mail.ru" required />
                    </div>
                    <div className="input-group">
                        <label>Телефон</label>
                        <input type="tel" placeholder="+7 (999) 000-00-00" required />
                    </div>
                    <div className="input-group">
                        <label>Выбранный курс</label>
                        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                            <option value="">Выберите направление</option>
                            {coursesData.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                        </select>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                        Отправить данные
                    </button>
                </form>
            </div>
        </div>
    );
}

export default BuyModal;