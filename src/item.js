export default function Item({ item, onDeleteItems, update }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => update(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
