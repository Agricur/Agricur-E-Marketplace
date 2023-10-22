describe('Home Page', () => {
    it('should display the home page content', () => {
      // Visit the home page
      cy.visit('http://localhost:3000'); 
  
      // Ensure the header is displayed
      cy.get('header').should('exist');
  
      // Ensure the navigation bar is displayed
      cy.get('nav').should('exist');
  
      // Ensure the hero section is displayed
      cy.get('hero').should('exist');
  
      // Ensure the footer is displayed
      cy.get('footer').should('exist');
    });
  
    it('should display user-specific content when logged in', () => {
      // Visit the home page
      cy.visit('http://localhost:3000'); // Replace with the actual URL of your home page
  
      // Set a JWT token in the browser's localStorage to simulate a logged-in state
      cy.window().then((win) => {
        win.localStorage.setItem('jwtToken', 'your-jwt-token-here');
      });
  
      // Reload the page to apply the JWT token
      cy.reload();
  
    });
  });
  