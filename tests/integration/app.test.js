const app = require('../../src/app')
const request = require('supertest')(app)


it('should listen on port 3000', () => {
  return request.get('/')
    .then(res => expect(res.status).toBe(200))
    
})