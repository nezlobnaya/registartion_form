describe('http example', () => {
    it('GET',function() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8000/api/records',
        })
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).have.property('length');
            assert.notExists(null, 'val is null or undefined')
        });
    })

    it('POST',function() {
        cy.request('POST', 'http://localhost:8000/api/records', {
            first_name: 'test',
            last_name: 'test',
                address1: '730 West 178',
                address2: '',
                city: 'SLC',
                state: 'UT',
                zip: '84606',
                country: 'US',
        }).then(response => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message', 'Record created successfully!')})

    })
});

