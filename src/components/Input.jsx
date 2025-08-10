import '../styles/input.css';

export default function Input({
  type,
  name,
  label,
  required,
  value,
  onChange,
}) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
