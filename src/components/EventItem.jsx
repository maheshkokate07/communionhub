import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeEvent } from "../store/slices/eventSlice";

const EventItem = ({ id, title, date, location, description }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeEvent(id));
    }

    return (
        <div className="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-blue-700 flex items-center justify-between">
                {title}
                <span>
                    <MdDeleteSweep size={26} color="red" onClick={() => (handleDelete(id))} />
                </span>
            </h3>
            <p className="text-gray-600">{date}</p>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-500 mt-2">{description}</p>
        </div>
    );
}

export default EventItem;