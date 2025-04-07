import { setFormData, resetFormData } from '@/app/store/formDataSlice';
import { FormData } from '@/app/store/types';
import formDataReducer from '@/app/store/formDataSlice';

describe('formDataSlice', () => {
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

    it('should return the initial state when passed an empty action', () => {
        const result = formDataReducer(undefined, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('should handle setFormData action', () => {
        const partialData = {
            nom: 'Test Name',
            site_web: 'https://example.com',
        };
        const action = setFormData(partialData);
        const result = formDataReducer(initialState, action);
        expect(result).toEqual({
            ...initialState,
            ...partialData,
        });
    });

    it('should handle resetFormData action', () => {
        const modifiedState: FormData = {
            numero_finess: '12345',
            nom: 'Modified Name',
            site_web: 'https://modified.com',
            numero_telephone: '1234567890',
            adresse_mail: 'test@example.com',
            coordonnee_geographique: '45.764043, 4.835659',
            adresse: '123 Test Street',
            code_postal: '69000',
            ville: 'Lyon',
            modalites: [1],
            horaires: [1,2,3],
        };
        const action = resetFormData();
        const result = formDataReducer(modifiedState, action);
        expect(result).toEqual(initialState);
    });
});