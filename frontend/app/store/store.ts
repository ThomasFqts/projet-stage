import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './formDataSlice';
import formOptionsReducer from './formOptionsSlice';
import nouvelleAdresseReducer from './nouvelleAdresseSlice';
import nouvelHoraireReducer from './nouvelHoraireSlice';
import newHoraireReducer from './newHoraireSlice';

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