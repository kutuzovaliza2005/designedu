import { useState, useEffect } from 'react';
import './StatsCounter.css';

function StatsCounter() {
    const [counters, setCounters] = useState({
        students: 0,
        courses: 0,
        teachers: 0
    });

    useEffect(() => {
        const targetValues = {
            students: 325,
            courses: 10,
            teachers: 4
        };

        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            setCounters({
                students: Math.floor(targetValues.students * (currentStep / steps)),
                courses: Math.floor(targetValues.courses * (currentStep / steps)),
                teachers: Math.floor(targetValues.teachers * (currentStep / steps))
            });

            if (currentStep >= steps) {
                setCounters(targetValues);
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">{counters.students.toLocaleString()}+</div>
                <div className="stat-label">Студентов</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{counters.courses}+</div>
                <div className="stat-label">Курсов</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{counters.teachers}+</div>
                <div className="stat-label">Преподавателей</div>
            </div>
        </div>
    );
}

export default StatsCounter;