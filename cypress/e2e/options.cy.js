/// <reference types="cypress" />

describe('whack-em home', () => {
  beforeEach(() => {
    localStorage.setItem('player-name', 'TestPlayer');
    cy.visit('https://localhost:8080');
    cy.get('a[href="/options"]').first().click();
  });

  it('sets game level', () => {
    cy.get('.level-btn').should('have.length', 3);

    cy.get('.level-btn').first().click();
    cy.should(() => {
      expect(localStorage.getItem('level')).to.eq('0');
    });
  });

  it('sets game mode', () => {
    cy.get('.mode-btn').should('have.length', 2);

    cy.get('.mode-btn').first().click();
    cy.should(() => {
      expect(localStorage.getItem('mode')).to.eq('zombies');
    });
  });
})
