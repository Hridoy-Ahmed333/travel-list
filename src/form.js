import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [num, setNum] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      alert("Add an Item");
      return;
    }
    const newItem = {
      description: description,
      quantity: num,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    console.log("Handle submit is called");
    console.log(newItem);
    setDescription("");
    setNum(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ☺ trip?</h3>
      <select
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
}
