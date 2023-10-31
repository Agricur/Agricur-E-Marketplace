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
  
  
     waitFor(() => {
        const searchResults = screen.getByRole('list'); 
        expect(searchResults).toBeInTheDocument();
      });
  });
  

  