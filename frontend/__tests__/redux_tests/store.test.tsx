import { store } from "@/app/store/store";

describe('Redux Store', () => {
    it('should initialize with the correct reducers', () => {
        const state = store.getState();

        expect(state).toHaveProperty('formData');
        expect(state).toHaveProperty('formOptions');
        expect(state).toHaveProperty('nouvelleAdresse');
        expect(state).toHaveProperty('nouvelHoraire');
        expect(state).toHaveProperty('newHoraire');
    });

    it('should allow dispatching actions', () => {
        const action = { type: 'test/action' };
        expect(() => store.dispatch(action)).not.toThrow();
    });

    it('should return the correct state type', () => {
        const state = store.getState();
        expect(state).toBeInstanceOf(Object);
    });

    it('should return the correct dispatch type', () => {
        const dispatch = store.dispatch;
        expect(dispatch).toBeInstanceOf(Function);
    });
});