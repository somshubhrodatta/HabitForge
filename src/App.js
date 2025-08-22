import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css'; // Ensure this is index.css
//import './styles.css';
function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100">
      {currentUser ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;