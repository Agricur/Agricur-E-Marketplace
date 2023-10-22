import {render, screen, cleanup} from '@testing-library/react';
import Header from '../Layout/Header';


afterEach(() => {
    cleanup();
});

test('should render Header', () => {
    render(<Header/>);
    const testElement = screen.getByTestId('header');
    expect(testElement).toBeInTheDocument();
});
