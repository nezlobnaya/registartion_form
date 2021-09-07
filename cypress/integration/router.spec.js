describe('http example', () => {
    it('GET',function() {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/records',
        })
        .then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).have.property('length');
            assert.notExists(null, 'val is null or undefined')
        });
    })

    it('POST',function() {
        cy.request('POST', 'http://localhost:8080/api/records', {
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

    it('PUT',function() {
        cy.request('PATCH', 'http://localhost:8080/api/records/6111c32b91fa9e5d04c185f2', {
            first_name: 'test',
            last_name: 'test',
            '_id': '6137b7e0de23c905681153ce',
                address1: '730 West 178',
                address2: '',
                city: 'SLC',
                state: 'UT',
                zip: '84606',
                country: 'US',
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('city', 'SLC')
        })
})

    it('DELETE',function() {
        cy.request('DELETE', 'http://localhost:8080/api/records/6111c32b91fa9e5d04c185f2').then(response => {
            expect(response.body).to.have.property('message', 'Record deleted successfully.')})
    })

    
});

