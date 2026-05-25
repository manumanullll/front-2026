import './Input.css';

export default function Input({ label, type, id, value, onChange, placeholder, error }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? 'input-error' : ''}
            />
            <span className="error-message">{error || ''}</span>
        </div>
    );
}