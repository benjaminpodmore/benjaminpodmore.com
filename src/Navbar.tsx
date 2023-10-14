const Navbar = () => {
    return (
        <nav className="bg-black p-4 sticky top-0 z-50 h-14">
            <ul className="flex space-x-4">
                <li><a href="#landing" className="text-blue-600 hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
