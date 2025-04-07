import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

/**
 * Slice Redux pour gérer l'état de `nouvelleAdresse`.
 * 
 * Ce slice est utilisé pour suivre et manipuler l'état lié à une nouvelle adresse.
 * Il contient deux reducers principaux :
 * - `toggleNouvelleAdresse` : Inverse l'état actuel de `nouvelleAdresse`.
 * - `setNouvelleAdresse` : Met à jour l'état avec une valeur booléenne spécifique.
 * 
 * @module nouvelleAdresseSlice
 * @property {string} name - Le nom du slice, ici 'nouvelleAdresse'.
 * @property {any} initialState - L'état initial du slice.
 * @property {Object} reducers - Les fonctions reducers pour manipuler l'état.
 */
const nouvelleAdresseSlice = createSlice({
    name: 'nouvelleAdresse',
    initialState,
    reducers: {
        /**
         * Un reducer qui inverse l'état actuel de `state`.
         * 
         * @param state - L'état actuel représentant une valeur booléenne.
         * @returns La valeur inversée de l'état actuel.
         */
        toggleNouvelleAdresse(state) {
            return !state;
        },
        /**
         * Met à jour l'état `nouvelleAdresse` avec la valeur fournie dans le payload.
         *
         * @param state - L'état actuel du slice.
         * @param action - L'action contenant un payload de type boolean.
         * @returns La nouvelle valeur de `nouvelleAdresse` basée sur le payload.
         */
        setNouvelleAdresse(state, action: { payload: boolean }) {
            return action.payload;
        },
    },
});

export const { toggleNouvelleAdresse, setNouvelleAdresse } = nouvelleAdresseSlice.actions;
export default nouvelleAdresseSlice.reducer;