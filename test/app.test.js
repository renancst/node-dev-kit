const app = require('../src/app')
const request = require('supertest')(app)


test('should listen on port 3000', () => {
  return request.get('/users')
    // .then(res => expect(res.status).toBe(200))
    .expect(200)
    
})