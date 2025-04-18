import { setNewHoraire, resetNewHoraire } from "@/app/redux/newHoraireSlice";
import { NewHoraire } from "@/app/redux/types";
import newHoraireReducer from "@/app/redux/newHoraireSlice";

describe('newHoraireSlice', () => {
    const initialState: NewHoraire = {
        jour: '',
        horaire_ouverture: '',
        horaire_fermeture: '',
    };

    it('should return the initial state when passed an empty action', () => {
        const result = newHoraireReducer(undefined, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('should handle setNewHoraire action', () => {
        const updatedHoraire = {
            jour: 'Monday',
            horaire_ouverture: '08:00',
        };

        const result = newHoraireReducer(initialState, setNewHoraire(updatedHoraire));
        expect(result).toEqual({
            ...initialState,
            ...updatedHoraire,
        });
    });

    it('should handle resetNewHoraire action', () => {
        const modifiedState: NewHoraire = {
            jour: 'Tuesday',
            horaire_ouverture: '09:00',
            horaire_fermeture: '17:00',
        };

        const result = newHoraireReducer(modifiedState, resetNewHoraire());
        expect(result).toEqual(initialState);
    });
});