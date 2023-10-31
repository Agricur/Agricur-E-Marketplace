import {render, screen, cleanup} from '@testing-library/react';
import SearchBar from '../Layout/SearchBar';
import { fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

test('should render a search input field', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search here ...');
    expect(searchInput).toBeInTheDocument();
  });
  
  test('should render a "Search" button', () => {
    render(<SearchBar />);
    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();
  });
  
  test('should initially not display search results dropdown', () => {
    render(<SearchBar />);
    const searchResults = screen.queryByRole('listbox');
    expect(searchResults).not.toBeInTheDocument();
  });
  
  test('should display search results when a search term is entered', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Search here ...');
    fireEvent.change(searchInput, { target: { value: 'example' } });
  
    // You may want to wait for the debounce or API call to complete before checking for the results.
    // Use `waitFor` or an appropriate delay mechanism.
  
     waitFor(() => {
        const searchResults = screen.getByRole('list'); // Use role "list" for the container
        expect(searchResults).toBeInTheDocument();
      });
  });
  
  // Add more test cases as needed for different interactions and conditions.
  