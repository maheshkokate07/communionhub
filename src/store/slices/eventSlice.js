import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "event",
    initialState: {
        events: []
    },
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        removeEvent: (state, action) => {
            state.events = state?.events?.filter((event) => event?.id !== action.payload);
        }
    }
})

export const { addEvent, removeEvent } = eventSlice.actions;
export default eventSlice.reducer;