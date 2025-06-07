import { useState } from 'react';

type Props = {
  setUsername: (username: string) => void;
};

export default function Login({ setUsername }: Props) {
  const [input, setInput] = useState('');

  const handleLogin = () => {
    if (input.trim()) {
      localStorage.setItem('username', input);
      setUsername(input);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-2xl shadow-xl w-80 bg-white">
        <h1 className="text-xl font-bold mb-4">Welcome!</h1>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-black text-white w-full py-2 rounded"
          onClick={handleLogin}
        >
          ENTER
        </button>
      </div>
    </div>
  );
}
