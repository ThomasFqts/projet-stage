import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const nouvelleAdresseSlice = createSlice({
    name: 'nouvelleAdresse',
    initialState,
    reducers: {
        toggleNouvelleAdresse(state) {
            return !state;
        },
        setNouvelleAdresse(state, action: { payload: boolean }) {
            return action.payload;
        },
    },
});

export const { toggleNouvelleAdresse, setNouvelleAdresse } = nouvelleAdresseSlice.actions;
export default nouvelleAdresseSlice.reducer;