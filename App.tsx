
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white font-sans">
      <div className="text-center p-8 md:p-12 bg-gray-800 bg-opacity-50 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Olá, Mundo!
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Este é um site de teste para o Git.
        </p>
        <div className="mt-6 text-sm text-gray-500">
          <p>Aplicação React + TypeScript + Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
};

export default App;
