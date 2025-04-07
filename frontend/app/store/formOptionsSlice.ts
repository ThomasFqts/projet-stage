import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormOptions } from './types';

const initialState: FormOptions = {
    adresses: [],
    modalites: [],
    horaires: [],
};

/**
 * Slice Redux pour gérer les options du formulaire dans l'état global de l'application.
 *
 * Ce slice contient des réducteurs pour mettre à jour et réinitialiser les options
 * du formulaire. Il est utilisé pour centraliser la gestion des données liées aux
 * options du formulaire dans l'application.
 *
 * - `setFormOptions`: Met à jour les options du formulaire avec les données fournies.
 * - `resetFormOptions`: Réinitialise les options du formulaire à leur état initial.
 *
 * @module formOptionsSlice
 */
const formOptionsSlice = createSlice({
    name: 'formOptions',
    initialState,
    reducers: {
        /**
         * Fonction réductrice pour mettre à jour les options du formulaire dans l'état.
         * 
         * @param state - L'état actuel des options du formulaire.
         * @param action - L'action déclenchée contenant les nouvelles options du formulaire en tant que charge utile.
         * 
         * @returns Les options du formulaire mises à jour à partir de la charge utile de l'action.
         */
        setFormOptions(state, action: PayloadAction<FormOptions>) {
            return action.payload;
        },
        /**
         * Réinitialise les options du formulaire à leur état initial.
         *
         * @returns L'état initial des options du formulaire.
         */
        resetFormOptions() {
            return initialState;
        },
    },
});

export const { setFormOptions, resetFormOptions } = formOptionsSlice.actions;
export default formOptionsSlice.reducer;