const app = require('../server');

const request = require('supertest');
const assert = require('assert');

describe('GET /api/users/local-user', () => {
  it('should get 200', done => {
    request(app)
      .get('/api/users/local-user')
      .expect(200, done);
  }),
    it('should get 2 records', done => {
      request(app)
        .get('/api/users/local-user')
        .then(response => {
          const { users } = response.body;
          assert.equal(users.length, 2);
          done();
        });
    });
});
