import '../styles/table.css';

export default function Table({ children }) {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
}
