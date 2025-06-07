import { useState } from 'react';
import Feed from './pages/Feed';
import Login from './pages/Login';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
  };

  return username ? (
    <Feed username={username} onLogout={handleLogout} />
  ) : (
    <Login setUsername={setUsername} />
  );
}

export default App;
