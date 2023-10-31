import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination/Pagination';

test('should render the Pagination component', () => {

  const totalPages = 5;
  const currentPage = 3;
  const onPageChange = jest.fn();

  // Render the component
  render(
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
  );

  // Check if the component is rendered
  const paginationComponent = screen.getByTestId('pagination-component');
  expect(paginationComponent).toBeInTheDocument();
});

test('should call onPageChange with the correct page number when a button is clicked', () => {

  const totalPages = 5;
  const currentPage = 3;
  const onPageChange = jest.fn();

  // Render the component
  render(
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
  );

  // Click on the next button
  const nextButton = screen.getByText('>');
  fireEvent.click(nextButton);
  expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);

  // Click on the previous button
  const previousButton = screen.getByText('<');
  fireEvent.click(previousButton);
  expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);

  // Click on a specific page button
  const pageButton = screen.getByText('4'); // Change this to the desired page number
  fireEvent.click(pageButton);
  expect(onPageChange).toHaveBeenCalledWith(4);
});
