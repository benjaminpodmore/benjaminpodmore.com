import './App.css';
import About from './About'
import Projects from './Projects'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [view, setView] = useState('about');

  const renderContent = () => {
    switch (view) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="transform -translate-y-16">
        <div className="mb-4 text-center">
          <button onClick={() => setView('about')} className="border rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300 mr-2">About</button>
          <button onClick={() => setView('projects')} className="border rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300">Projects</button>
        </div>
        <div className="border-t border-b border-gray-200 py-6 max-w-md m-auto">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
