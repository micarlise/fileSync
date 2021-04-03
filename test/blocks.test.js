const request = require('supertest');
const express = require('express');

const blocksRouter = require('../routes/blocks');

const app = express();

app.use('/blocks', blocksRouter);

describe('/blocks', function() {

    it('POST /blocks/f1lakdj6 200', function(done) {

        request(app)
            .post('/blocks/f1lakdj6')
            .attach('block', 'test/fixtures/testblock')
            .expect(200, done);

    });

    it('GET /blocks/does_not_exist 404', function(done) {

        request(app)
            .get('/blocks/does_not_exist')
            .expect(404, done);

    });

    it('GET /blocks/f1lakdj6 200', function(done) {

        request(app)
            .get('/blocks/f1lakdj6')
            .expect(200, done());
    });

});
