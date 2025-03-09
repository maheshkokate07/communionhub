import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: {
        events: []
    },
    reducers: {
        // Slice for adding event
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        // Slice for removing event
        removeEvent: (state, action) => {
            state.events = state?.events?.filter((event) => event?.id !== action.payload);
        }
    }
})

export const { addEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;