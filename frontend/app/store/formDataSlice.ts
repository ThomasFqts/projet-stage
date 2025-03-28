import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from './types';

const initialState: FormData = {
    numero_finess: '',
    nom: '',
    site_web: '',
    numero_telephone: '',
    adresse_mail: '',
    coordonnee_geographique: '',
    adresse: '',
    code_postal: '',
    ville: '',
    modalites: [],
    horaires: [],
};

const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setFormData(state, action: PayloadAction<Partial<FormData>>) {
            return { ...state, ...action.payload };
        },
        resetFormData() {
            return initialState;
        },
    },
});

export const { setFormData, resetFormData } = formDataSlice.actions;
export default formDataSlice.reducer;