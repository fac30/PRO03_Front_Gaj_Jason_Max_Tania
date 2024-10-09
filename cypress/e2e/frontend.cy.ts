describe('Front-end Tests', () => {
  beforeEach(() => { 
		cy.visit('http://localhost:5173')
	})

	context ('Landing Page', () => {
		it('App does not advance with an empty name', () => {})
		it('App does not advance with an offensive name', () => {})
		it('App does not advance with an unsafe name', () => {})
		it('App advances to Input Page with a valid name', () => {})
	})

	context ('Input Page', () => {
		it('App does not advance with an empty date', () => {})
		it('App does not advance with an empty genre', () => {})
		it('App does not advance with an empty mood', () => {})
		it('App makes API Call with a valid date, genre, and mood', () => {})
	})

	context ('API Call', () => {
		it('Making the API call triggers the loading animation', () => {})
		it('App advances to Playlist Page with a valid API response', () => {})
	})

	context ('Playlist Page', () => {
		it('App displays the playlist title', () => {})
		it('App displays tracks appropriate to the date, genre, and mood', () => {})
		it('App displays a button to generate a new playlist', () => {})
		it('App advances to Input Page when the "New Playlist" button is clicked', () => {})
		it('App displays the correct number of tracks', () => {})
		it('Individual tracks are playable', () => {})
	})
})