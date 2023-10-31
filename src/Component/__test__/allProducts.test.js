import {render, screen, cleanup} from '@testing-library/react';
import AllProducts from '../Layout/AllProducts';


afterEach(() => {
    cleanup();
});

test('should render All products', () => {
    render(<AllProducts/>);
    const testElement = screen.getByTestId('All-products');
    expect(testElement).toBeInTheDocument();
});


  test('should render a pagination component', () => {
    render(<AllProducts />);
    const paginationElement = screen.getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
  });
  
 
  
  

