import "./ListOut.css";

export default function ListOut({ items }) {
  return (
    <ul className="listing">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
