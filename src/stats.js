export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>You have got nothing in inventory. You can add new items</em>;
      </p>
    );
  }
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      {numItem === numPacked ? (
        <em>You got everything. You are ready to go</em>
      ) : (
        <em>
          You have {numItem} items in yor list. You have packed {numPacked} item
          ({(numPacked * 100) / numItem}%).
        </em>
      )}
    </footer>
  );
}
