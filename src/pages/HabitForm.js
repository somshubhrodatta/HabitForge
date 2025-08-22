import { useState, useContext } from 'react';
import { HabitContext } from '../contexts/HabitContext';

function HabitForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#000000');
  const { addHabit } = useContext(HabitContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) return;
    addHabit(name, category, color);
    setName('');
    setCategory('');
    setColor('#000000');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded shadow">
      <input
        type="text"
        placeholder="Habit Name (e.g., Exercise)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Category (e.g., Fitness)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <div className="flex items-center mb-2">
        <label>Color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="ml-2"
        />
      </div>
      <button type="submit" className="w-full p-2 text-white bg-green-500 rounded">
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;