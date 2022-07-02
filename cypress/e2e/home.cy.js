/// <reference types="cypress" />

const { id } = require("date-fns/locale");

describe('whack-em home', () => {
  beforeEach(() => {
    cy.visit('https://localhost:8080');
  });

  it('displays four nav links', () => {
    cy.get('nav a').should('have.length', 4);

    cy.get('#game_btn').should('contain.text', 'PLAY');
    cy.get('#scores_btn').should('contain.text', 'SCORE BOARD');
    cy.get('#options_btn').should('contain.text', 'OPTIONS');
    cy.get('#about_btn').should('contain.text', 'ABOUT');
  });

  it('opens score board', () => {
    cy.get('#scores_btn').click();
    cy.get('#page_title').should('contain.text', 'Score');
  });

  it('redirects to options when player name is not set', () => {
    cy.get('#game_btn').click();
    cy.get('#page_title').should('contain.text', 'Options');
    cy.get('#confirmation_dialog').should('be.visible');
    cy.get('#confirmation_dialog [role=button]').click();
    cy.get('#name').clear().type('TestPlayer').should(() => {
      expect(localStorage.getItem('player-name')).to.eq('TestPlayer');
    });
  });

  it('opens a game when player name is set', () => {
    localStorage.setItem('player-name', 'TestPlayer');
    cy.reload();
    cy.get('#game_btn').should('have.attr', 'href', '/game');
    cy.get('#game_btn').click().should(() => {
      expect(localStorage.getItem('player-name')).to.eq('TestPlayer');
    });
    cy.get('#windows_grid').should('be.visible');
  });

  it('opens about', () => {
    cy.get('#about_btn').click();
    cy.get('#page_title').should('contain.text', 'About');
  });
})
