describe('http example', () => {
    it('GET',function() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8000/api/records',
        })
        .then(response => {
            expect(response.status).to.eq(200);
        });
    })

});

