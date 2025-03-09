import { useState } from "react";

const CreateEventModal = ({ isOpen, onClose, callbackFun }) => {
    const [eventData, setEventData] = useState({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        callbackFun(eventData);
        onClose();
        setEventData({ title: "", date: "", location: "", category: "", description: "" });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
                className="bg-white w-full max-w-md p-6 rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create New Event</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Event Title</label>
                        <input
                            type="text"
                            placeholder="Enter event title"
                            value={eventData.title}
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                            className="mt-1 p-3 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Event Date</label>
                        <input
                            type="date"
                            value={eventData.date}
                            onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                            className="mt-1 p-3 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={eventData.location}
                            onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                            className="mt-1 p-3 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            value={eventData.category}
                            onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
                            className="mt-1 p-3 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                        >
                            <option value="">Select Category</option>
                            <option value="Religious">Religious</option>
                            <option value="Social">Social</option>
                            <option value="Charity">Charity</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            placeholder="Enter event description"
                            value={eventData.description}
                            onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                            className="mt-1 p-3 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!eventData.title || !eventData.date || !eventData.location || !eventData.category || !eventData.description}
                            className="cursor-pointer px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEventModal;