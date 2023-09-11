import React from 'react';
import './App.css';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border-t border-b border-gray-200 py-6 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Welcome to My Website</h1>
        <p className="mb-6">
          I am a final year Software Engineering Student at UWA, interested in NLP, Cloud and IoT.
        </p>
        <button className="border rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300">
          More to come
        </button>
      </div>
    </div>
  );
}

export default App;
