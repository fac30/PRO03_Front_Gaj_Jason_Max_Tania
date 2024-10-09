/// <reference types="cypress" />

describe('Front-end Tests', () => {
  beforeEach(() => { 
		cy.visit('http://localhost:5173')
	})

	context ('Landing Page', () => {
		context ('Name Input', () => {
			context ('Failure States', () => {
				it('App does not advance with an empty name', () => {
					cy.get('input[type="text"][placeholder="What\'s Your Name?"]')
						.should('exist');
					cy.get('button[type="submit"]')
						.click();
					cy.url()
						.should('eq', 'http://localhost:5173/');
					cy.get('.error')
						.should('contain', 'Please enter your name');
				})
				// it('App does not advance with an offensive name', () => {})
				// it('App does not advance with an unsafe name', () => {})
			})

			// context ('Success States', () => {
			// 	it('App advances to Input Page with a valid name', () => {})
			// })
		})
	})

	context ('Input Page', () => {
		// context ('Form Submission', () => {
		// 	context ('Failure States', () => {
		// 		it('App does not advance with an empty date', () => {})
		// 		it('App does not advance with an empty genre', () => {})
		// 		it('App does not advance with an empty mood', () => {})
		// 	})
			// context ('Success States', () => {
			// it('App makes API Call with a valid date, genre, and mood', () => {})
			// })
		// })
	})

	context ('API Call', () => {
		// it('Making the API call triggers the loading animation', () => {})
		// it('App advances to Playlist Page with a valid API response', () => {})
	})

	context ('Playlist Page', () => {
		// it('App displays the playlist title', () => {})
		// it('App displays tracks appropriate to the date, genre, and mood', () => {})
		// it('App displays a button to generate a new playlist', () => {})
		// it('App advances to Input Page when the "New Playlist" button is clicked', () => {})
		// it('App displays the correct number of tracks', () => {})
		// it('Individual tracks are playable', () => {})
	})
})