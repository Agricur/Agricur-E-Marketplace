import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '../Checkout/Checkout';
import { MemoryRouter } from 'react-router-dom'

// Mock the react-toastify module to prevent issues
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}));

test('should render the Checkout component', () => {
  const product = {
    productId: 1,
    price: 100,
    quantity: 2,
  };

  render(
    <MemoryRouter>
      <Checkout product={product} />
    </MemoryRouter>
  );

  const title = screen.getByText('Shipping Address');
  const paymentMethodTitle = screen.getByText('Choose the Payment Method');

  expect(title).toBeInTheDocument();
  expect(paymentMethodTitle).toBeInTheDocument();
});



test('should display payment method options', () => {
  const product = {
    productId: 1,
    price: 100,
    quantity: 2,
  };

  render(
    <MemoryRouter>
      <Checkout product={product} />
    </MemoryRouter>
  );

  const cashOnDeliveryOption = screen.getByText('Cash On Delivery');
  const payWithPayPalOption = screen.getByText('Pay with PayPal');

  expect(cashOnDeliveryOption).toBeInTheDocument();
  expect(payWithPayPalOption).toBeInTheDocument();
});

 