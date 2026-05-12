import './styles.css';

export default function InputGroup({ label, type, name, value, onChange, error }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange}
        className={error ? 'input-error' : ''}
      />
      {/* Exibição dinâmica da mensagem de erro */}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}