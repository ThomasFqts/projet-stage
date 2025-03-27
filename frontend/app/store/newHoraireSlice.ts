import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewHoraire {
    jour: string;
    horaire_ouverture: string;
    horaire_fermeture: string;
}

const initialState: NewHoraire = {
    jour: '',
    horaire_ouverture: '',
    horaire_fermeture: '',
};

const newHoraireSlice = createSlice({
    name: 'newHoraire',
    initialState,
    reducers: {
        setNewHoraire(state, action: PayloadAction<Partial<NewHoraire>>) {
            return { ...state, ...action.payload };
        },
        resetNewHoraire() {
            return initialState;
        },
    },
});

export const { setNewHoraire, resetNewHoraire } = newHoraireSlice.actions;
export default newHoraireSlice.reducer;