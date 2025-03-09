import { useState } from "react";
import EventItem from "../components/EventItem";
import CreateEventModal from "../components/CreateEventModal";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../store/slices/eventSlice";

// Events page to display events
const Events = () => {

    const dispatch = useDispatch();

    // Fetch events from store
    const events = useSelector((state) => state?.event?.events);

    const [category, setCategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter events based on category
    const filteredEvents = category ? events.filter(event => event.category === category) : events;

    // Function for add event
    const handleAddEvent = (newEvent) => {
        // Create an unique id for event
        const id = events[events.length - 1]?.id + 1 || 0;

        // Dispatch addEvent slice
        dispatch(addEvent({ ...newEvent, id: id }));
    }

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4">Event Listings</h2>

            <div className="flex flex-col justify-between sm:flex-row items-center gap-4 mb-4">
                <select
                    // Disable filter when there are no events
                    disabled={events?.length === 0}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`p-2 border border-gray-300 rounded cursor-pointer w-full md:w-auto disabled:opacity-40 disabled:cursor-not-allowed`}
                >
                    <option value="">All Categories</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 cursor-pointer bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all w-full md:w-auto"
                >
                    Add New Event
                </button>
            </div>

            {
                events?.length === 0 && <div className="text-center text-lg font-semibold pt-4 text-blue-700">No events available</div>
            }

            {/* Map events using event item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredEvents.map((event, index) => (
                    <EventItem key={index} {...event} />
                ))}
            </div>

            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                callbackFun={handleAddEvent}
            />
        </div>
    );
}

export default Events;