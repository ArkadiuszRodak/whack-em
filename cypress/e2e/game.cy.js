/// <reference types="cypress" />

describe('whack-em home', () => {
  beforeEach(() => {
    localStorage.setItem('player-name', 'TestPlayer');
    cy.visit('https://localhost:8080');
    cy.get('a[href="/game"]').first().click();
  });

  after(() => {
    cy.visit('https://localhost:8080');
  });

  it('has all lives', () => {
    cy.get('.life-bar.bg-red-500').should('have.length', 10);
  });

  it('has zero score', () => {
    cy.get('.score-container').should('have.text', '0');
  });

  it('game over', () => {
    cy.get('#game_loader', { timeout: 6000 }).should('not.be.visible');
    cy.wait(20 * 1000); // 20 seconds
    cy.get('#page_title').should('contain', 'Score');
  });

  it('score increments and visible after game over', () => {
    cy.get('#game_loader', { timeout: 6000 }).should('not.be.visible');
    for(let i = 0; i < 10; i += 1) {
      cy.get('.single-window', { timeout: 10000 }).first().click();
    }
    cy.wait(20 * 1000); // 20 seconds
    cy.get('#page_title').should('contain', 'Score');
    cy.get('#app').should('contain', 'TestPlayer');
    cy.get('#app').should('contain', '10');
  });
})
