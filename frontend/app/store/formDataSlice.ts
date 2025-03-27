import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
    numero_finess: string;
    nom: string;
    site_web: string;
    numero_telephone: string;
    adresse_mail: string;
    coordonnee_geographique: string;
    adresse: string;
    code_postal: string;
    ville: string;
    modalites: number[];
    horaires: number[];
}

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