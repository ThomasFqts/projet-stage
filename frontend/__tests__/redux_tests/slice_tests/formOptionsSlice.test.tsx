import { setFormOptions, resetFormOptions } from "@/app/redux/formOptionsSlice";
import { FormOptions } from "@/app/redux/types";
import formOptionsReducer from "@/app/redux/formOptionsSlice";

describe('formOptionsSlice', () => {
    const initialState: FormOptions = {
        adresses: [],
        modalites: [],
        horaires: [],
    };

    it('should return the initial state when passed an empty action', () => {
        const result = formOptionsReducer(undefined, { type: '' });
        expect(result).toEqual(initialState);
    });

    it('should handle setFormOptions', () => {
        const newFormOptions: FormOptions = {
            adresses: [],
            modalites: [],
            horaires: [],
        };

        const action = setFormOptions(newFormOptions);
        const result = formOptionsReducer(initialState, action);

        expect(result).toEqual(newFormOptions);
    });

    it('should handle resetFormOptions', () => {
        const modifiedState: FormOptions = {
            adresses: [],
            modalites: [],
            horaires: [],
        };

        const action = resetFormOptions();
        const result = formOptionsReducer(modifiedState, action);

        expect(result).toEqual(initialState);
    });
});