// @ts-nocheck
describe('Back-end API Tests', function () {
    it('should fetch mood data', function () {
        cy.request('GET', 'http://localhost:5000/')
            .then(function (response) {
            expect(response.status).to.eq(200);
        });
    });
});
