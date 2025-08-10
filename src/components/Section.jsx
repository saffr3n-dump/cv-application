export default function Section({ heading, children }) {
  return (
    <section>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
