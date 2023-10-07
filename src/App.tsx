import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import "./App.css"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 max-w-4xl mx-auto p-4">
      <div className="flex-grow">
        <Header />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
