export default function PageHeader({ title, description }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>{title}</h2>
      <p style={{ color: '#666', marginTop: '0.5rem' }}>{description}</p>
    </div>
  );
}