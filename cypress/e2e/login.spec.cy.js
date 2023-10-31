describe('Login Page', () => {
  it('should allow a user to log in', () => {
    cy.visit('http://localhost:3000/login'); 
    
    // Type email and password
    cy.get('input[name="email"]').type('seller@gmail.com'); 
    cy.get('input[name="password"]').type('Seller1@'); 

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.url().should('include', 'http://localhost:3000'); 
  });

  it('should show an error message for invalid login', () => {
    cy.visit('http://localhost:3000/login'); 

    // Type in an incorrect email and password
    cy.get('input[name="email"]').type('invalid@example.com'); 
    cy.get('input[name="password"]').type('invalidpassword'); 

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.contains("Account doesn't exist"); 
  });
});
