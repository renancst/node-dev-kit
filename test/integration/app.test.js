const app = require('../../src/app')
const request = require('supertest')(app)


test('should listen on port 3000', () => {
  return request.get('/')
    .expect(200)
    
})