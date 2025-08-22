import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { HabitContext } from '../contexts/HabitContext';
import HabitForm from './HabitForm';
import HabitList from '../components/HabitList';

function Dashboard() {
  const { logout, currentUser } = useContext(AuthContext);
  const { clearHabits } = useContext(HabitContext);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Habit Tracker for {currentUser}</h1>
        <div>
          <button onClick={logout} className="px-4 py-2 mr-2 text-white bg-red-500 rounded">
            Logout
          </button>
          <button onClick={clearHabits} className="px-4 py-2 text-white bg-gray-500 rounded">
            Clear My Habits
          </button>
        </div>
      </div>
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default Dashboard;