import { useContext } from 'react';
import { HabitContext } from '../contexts/HabitContext';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function HabitList() {
  const { habits, toggleDay } = useContext(HabitContext);

  const getStreak = (habit) => {
    return Object.values(habit.days).filter(d => d).length;
  };

  return (
    <div>
      {habits.map(habit => (
        <div key={habit.id} className="mb-4 p-4 bg-white rounded shadow">
          <div className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 rounded-full" style={{ backgroundColor: habit.color }}></span>
            <h3 className="font-bold">{habit.name} ({habit.category})</h3>
            <span className="ml-auto">Streak: {getStreak(habit)}</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map(day => (
              <button
                key={day}
                onClick={() => toggleDay(habit.id, day)}
                className={`p-2 rounded ${habit.days[day] ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList;