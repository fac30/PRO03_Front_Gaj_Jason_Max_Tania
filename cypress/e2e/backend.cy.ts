// @ts-nocheck
describe('Back-end API Tests', () => {
  it('should fetch mood data', () => {
    cy.request('GET', 'http://localhost:5000/')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
})