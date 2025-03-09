import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    // Navlink function to render a single navlink
    const NavLink = ({ to, children, onClick }) => {
        return (
            <Link
                to={to}
                onClick={onClick}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium"
            >
                {children}
            </Link>
        );
    }

    return (
        <header className="w-full bg-white shadow-md">
            <div className="mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">
                    <Link to="/home">
                        CommunionHub
                    </Link>
                </h1>

                <nav className="hidden sm:flex space-x-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>

                <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseSharp color="#656665" size={28} className="cursor-pointer" /> : <IoMenuSharp color="#656665" size={28} className="cursor-pointer" />}
                </button>
            </div>

            {isOpen && (
                <nav className="sm:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col items-center py-4 space-y-3">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/events" onClick={() => setIsOpen(false)}>Events</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;