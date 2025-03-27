import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const nouvelHoraireSlice = createSlice({
    name: 'nouvelHoraire',
    initialState,
    reducers: {
        toggleNouvelHoraire(state) {
            return !state;
        },
        setNouvelHoraire(state, action: { payload: boolean }) {
            return action.payload;
        },
    },
});

export const { toggleNouvelHoraire, setNouvelHoraire } = nouvelHoraireSlice.actions;
export default nouvelHoraireSlice.reducer;