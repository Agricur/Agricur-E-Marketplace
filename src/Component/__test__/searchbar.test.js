import {render, screen, cleanup} from '@testing-library/react';
import SearchBar from '../Layout/SearchBar';


afterEach(() => {
    cleanup();
});

test('should render Search bar', () => {
    render(<SearchBar/>);
    const testElement = screen.getByTestId('searchbar');
    expect(testElement).toBeInTheDocument();
});
