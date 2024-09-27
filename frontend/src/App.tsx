import './App.css';
import Navbar from './Navbar';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'

function App() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gray-900 text-white">
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
