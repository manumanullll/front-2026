import React from 'react';
import './Card.css';
export default function Card({ title, children }) {
    return (
        <section className="card">
            {title && <div className="card-header">{title}</div>}

            <div className="card-body">
                {children}
            </div>
        </section>
    );
}