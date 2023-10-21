import {render, screen, cleanup} from '@testing-library/react';
import NavBar from '../Layout/Navbar';


afterEach(() => {
    cleanup();
});

test('should render navigation bar', () => {
    render(<NavBar/>);
    const testElement = screen.getByTestId('navbar');
    expect(testElement).toBeInTheDocument();
});
