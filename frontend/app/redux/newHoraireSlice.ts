import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewHoraire } from './types';

const initialState: NewHoraire = {
    jour: '',
    horaire_ouverture: '',
    horaire_fermeture: '',
};

/**
 * Slice Redux pour gérer l'état de l'objet `newHoraire`.
 * 
 * Ce slice contient des reducers permettant de mettre à jour ou réinitialiser
 * l'état lié à un horaire. Il est conçu pour fusionner les propriétés partiellement
 * mises à jour avec l'état existant ou pour rétablir l'état initial.
 * 
 * ### Reducers :
 * - `setNewHoraire` : Met à jour l'état avec un objet partiel `NewHoraire`.
 * - `resetNewHoraire` : Réinitialise l'état à sa valeur initiale.
 * 
 * ### Utilisation :
 * Ce slice est utile pour gérer les modifications progressives d'un horaire
 * ou pour réinitialiser l'état dans des scénarios spécifiques.
 */
const newHoraireSlice = createSlice({
    name: 'newHoraire',
    initialState,
    reducers: {
        /**
         * Met à jour l'état avec l'objet partiel `NewHoraire` fourni.
         * Ce reducer fusionne l'état existant avec les propriétés de `action.payload`.
         * 
         * @param state - L'état actuel de `NewHoraire`.
         * @param action - Une action contenant un objet partiel `NewHoraire` pour mettre à jour l'état.
         * 
         * @returns Un nouvel objet d'état avec les propriétés mises à jour.
         */
        setNewHoraire(state, action: PayloadAction<Partial<NewHoraire>>) {
            return { ...state, ...action.payload };
        },
        /**
         * Réinitialise l'état du slice `newHoraire` à son état initial.
         * 
         * @returns L'état initial du slice `newHoraire`.
         */
        resetNewHoraire() {
            return initialState;
        },
    },
});

export const { setNewHoraire, resetNewHoraire } = newHoraireSlice.actions;
export default newHoraireSlice.reducer;