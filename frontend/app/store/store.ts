import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';
import formOptionsReducer from './formOptionsSlice';
import nouvelleAdresseReducer from './nouvelleAdresseSlice';
import nouvelHoraireReducer from './nouvelHoraireSlice';
import newHoraireReducer from './newHoraireSlice';

/**
 * Configure et exporte le store Redux pour l'application.
 * 
 * Le store combine plusieurs reducers pour gérer différentes parties de l'état de l'application :
 * - `formData` : Gère l'état lié aux données des formulaires.
 * - `formOptions` : Gère l'état des options des formulaires.
 * - `nouvelleAdresse` : Gère l'état des données pour une nouvelle adresse.
 * - `nouvelHoraire` : Gère l'état des données pour un nouvel horaire.
 * - `newHoraire` : Gère l'état des données supplémentaires liées aux horaires.
 * 
 * Ce store centralisé permet à l'application de gérer son état de manière prévisible et évolutive.
 */
export const store = configureStore({
    reducer: {
        formData: formDataReducer,
        formOptions: formOptionsReducer,
        nouvelleAdresse: nouvelleAdresseReducer,
        nouvelHoraire: nouvelHoraireReducer,
        newHoraire: newHoraireReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;