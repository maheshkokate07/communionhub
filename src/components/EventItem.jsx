import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeEvent } from "../store/slices/eventSlice";

// Event item component for a single event
const EventItem = ({ id, title, date, location, description }) => {

    const dispatch = useDispatch();

    // Dispatch the removeEvent slice on delete event
    const handleDelete = (id) => {
        dispatch(removeEvent(id));
    }

    return (
        <div className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-xl font-semibold text-blue-700 flex items-center justify-between">
                <div className="text-wrap break-words w-full">{title}</div>
                <div>
                    <MdDeleteSweep size={26} color="red" onClick={() => (handleDelete(id))} />
                </div>
            </div>
            <p className="text-gray-600">{date}</p>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-500 mt-2">{description}</p>
        </div>
    );
}

export default EventItem;