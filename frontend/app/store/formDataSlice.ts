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

/**
 * Slice Redux pour gérer les données du formulaire dans l'état global de l'application.
 * 
 * Ce slice contient l'état initial des données du formulaire, ainsi que des reducers
 * pour mettre à jour ou réinitialiser ces données. Il est utilisé pour centraliser
 * et gérer les informations saisies dans un formulaire, telles que les coordonnées,
 * les modalités, et les horaires.
 * 
 * Fonctionnalités principales :
 * - `setFormData` : Met à jour les données du formulaire avec des valeurs partielles.
 * - `resetFormData` : Réinitialise les données du formulaire à leur état initial.
 * 
 * Ce slice est conçu pour être utilisé avec Redux Toolkit afin de simplifier la gestion
 * de l'état global dans une application React.
 */
const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        /**
         * Met à jour les données du formulaire dans l'état avec les données partielles fournies.
         * Ce reducer fusionne l'état existant avec les nouvelles données provenant de la charge utile de l'action.
         *
         * @param state - L'état actuel des données du formulaire.
         * @param action - Une action contenant une mise à jour partielle des données du formulaire.
         * @returns L'état mis à jour avec les données fusionnées du formulaire.
         */
        setFormData(state, action: PayloadAction<Partial<FormData>>) {
            return { ...state, ...action.payload };
        },
        /**
         * Réinitialise les données du formulaire à leur état initial.
         * 
         * @returns L'état initial des données du formulaire.
         */
        resetFormData() {
            return initialState;
        },
    },
});

export const { setFormData, resetFormData } = formDataSlice.actions;
export default formDataSlice.reducer;