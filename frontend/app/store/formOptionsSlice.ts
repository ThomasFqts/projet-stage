import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormOptions } from './types';

const initialState: FormOptions = {
    adresses: [],
    modalites: [],
    horaires: [],
};

const formOptionsSlice = createSlice({
    name: 'formOptions',
    initialState,
    reducers: {
        setFormOptions(state, action: PayloadAction<FormOptions>) {
            return action.payload;
        },
        resetFormOptions() {
            return initialState;
        },
    },
});

export const { setFormOptions, resetFormOptions } = formOptionsSlice.actions;
export default formOptionsSlice.reducer;