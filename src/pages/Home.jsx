import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="h-screen flex flex-col bg-gray-50">

            <div className="flex flex-col items-center justify-center text-center px-6 py-20">

                <h2 className="text-lg font-semibold text-gray-600">
                    Welcome to CommunionHub
                </h2>

                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mt-4">
                    Connecting People Across Faiths & Interests
                </h1>

                <p className="text-gray-600 mt-4 max-w-xl">
                    CommunionHub is a platform designed to bring people of all faiths together through meaningful events. Whether it's religious gatherings, social meetups, or charity drives, we help communities connect, share, and grow.
                </p>

                <Link to="/events"
                    className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md 
                     hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                    Explore Events
                </Link>
            </div>
        </div>
    );
}