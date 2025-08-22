import { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [habits, setHabits] = useState(() => {
    if (currentUser) {
      const stored = localStorage.getItem(`habits_${currentUser}`);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`habits_${currentUser}`, JSON.stringify(habits));
    }
  }, [habits, currentUser]);

  const addHabit = (name, category, color) => {
    const newHabit = {
      id: Date.now(),
      name,
      category,
      color,
      days: { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false, Sat: false, Sun: false },
    };
    setHabits([...habits, newHabit]);
  };

  const toggleDay = (habitId, day) => {
    setHabits(habits.map(h => 
      h.id === habitId ? { ...h, days: { ...h.days, [day]: !h.days[day] } } : h
    ));
  };

  const clearHabits = () => {
    setHabits([]);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleDay, clearHabits }}>
      {children}
    </HabitContext.Provider>
  );
};