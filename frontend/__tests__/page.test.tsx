import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('../components/AddCentreForm', () => () => <div data-testid="add-centre-form" />);

describe('Home Page', () => {
    it('renders the heading', () => {
        render(<Home />);
        const heading = screen.getByText("Bienvenue sur le formulaire d'ajout de centres de dialyse.");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('text-center');
    });

    it('renders the AddCentreForm component', () => {
        render(<Home />);
        const addCentreForm = screen.getByTestId('add-centre-form');
        expect(addCentreForm).toBeInTheDocument();
    });
});