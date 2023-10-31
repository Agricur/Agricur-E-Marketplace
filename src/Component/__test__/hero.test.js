import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../Layout/Hero';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

test('should render the HeroSection component', () => {
    render(
        <MemoryRouter>
          <HeroSection />
        </MemoryRouter>
      );
  const title = screen.getByText('Agricur');
  const subTitle = screen.getByText('Your Trusted Partner in Agriculture Excellence');
  expect(title).toBeInTheDocument();
  expect(subTitle).toBeInTheDocument();
});

test('should display category links', () => {
    render(
        <MemoryRouter>
          <HeroSection />
        </MemoryRouter>
      );
  const fruitsLink = screen.getByText('Fruits');
  const vegetablesLink = screen.getByText('Vegetables');
  const grainsLink = screen.getByText('Grains');
  const fertilizersLink = screen.getByText('Fertilizers');
  const equipmentsLink = screen.getByText('Equipments');

  expect(fruitsLink).toBeInTheDocument();
  expect(vegetablesLink).toBeInTheDocument();
  expect(grainsLink).toBeInTheDocument();
  expect(fertilizersLink).toBeInTheDocument();
  expect(equipmentsLink).toBeInTheDocument();
});

test('should have correct category links', () => {
    render(
        <MemoryRouter>
          <HeroSection />
        </MemoryRouter>
      );
      const fruitsLink = screen.getByRole('link', { name: 'Fruits' });
      const vegetablesLink = screen.getByRole('link', { name: 'Vegetables' });
      const grainsLink = screen.getByRole('link', { name: 'Grains' });
      const fertilizersLink = screen.getByRole('link', { name: 'Fertilizers' });
      const equipmentsLink = screen.getByRole('link', { name: 'Equipments' });
    
      expect(fruitsLink).toBeInTheDocument();
      expect(vegetablesLink).toBeInTheDocument();
      expect(grainsLink).toBeInTheDocument();
      expect(fertilizersLink).toBeInTheDocument();
      expect(equipmentsLink).toBeInTheDocument();
});

