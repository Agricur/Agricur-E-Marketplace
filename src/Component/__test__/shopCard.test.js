import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import ShopCard from '../ShopView/ShopCard';

test('should render the ShopCard component with correct data', () => {
  const shopData = {
    shop_id: 1,
    name: 'Example Shop',
    image: 'example.jpg',
    rating: 4.5,
  };

  render(
    <Router>
      <ShopCard {...shopData} />
    </Router>
  );

  const shopName = screen.getByText('Example Shop');
  const rating = screen.getByText('Rating:');

  expect(shopName).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
});

test('should have a link to the shop home', () => {
    const shopData = {
      shop_id: 1,
      name: 'Example Shop',
      image: 'example.jpg',
      rating: 4.5,
    };
  
    render(
      <Router>
        <ShopCard {...shopData} />
      </Router>
    );
  
    const shopLink = screen.getByRole('link', { name: (content, element) => content.startsWith('Example Shop') });
  
    expect(shopLink).toHaveAttribute('href', '/ShopHome/1');
  });
   