import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

/**
 * Slice Redux pour gérer l'état de `nouvelHoraire`.
 * 
 * Ce slice contient des réducteurs permettant de basculer ou de définir
 * explicitement l'état booléen représentant un nouvel horaire.
 * 
 * - `toggleNouvelHoraire`: Inverse l'état actuel de `nouvelHoraire`.
 * - `setNouvelHoraire`: Met à jour l'état avec une valeur booléenne spécifique.
 * 
 * @module nouvelHoraireSlice
 */
const nouvelHoraireSlice = createSlice({
    name: 'nouvelHoraire',
    initialState,
    reducers: {
        /**
         * Fonction réductrice pour basculer l'état de `nouvelHoraire`.
         * Cette fonction inverse l'état booléen actuel, le faisant passer
         * de `true` à `false` ou de `false` à `true`.
         *
         * @param state - L'état actuel de `nouvelHoraire`.
         * @returns L'état inversé de `nouvelHoraire`.
         */
        toggleNouvelHoraire(state) {
            return !state;
        },
        /**
         * Fonction réductrice pour mettre à jour l'état avec un nouveau statut d'horaire.
         * 
         * @param state - L'état actuel de l'horaire.
         * @param action - Un objet contenant la charge utile avec le nouveau statut d'horaire.
         * @param action.payload - Un booléen indiquant le nouveau statut d'horaire.
         * @returns L'état mis à jour avec le nouveau statut d'horaire.
         */
        setNouvelHoraire(state, action: { payload: boolean }) {
            return action.payload;
        },
    },
});

export const { toggleNouvelHoraire, setNouvelHoraire } = nouvelHoraireSlice.actions;
export default nouvelHoraireSlice.reducer;