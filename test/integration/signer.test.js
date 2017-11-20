const { request, expect } = require('../common')

describe('API surface', function () { // eslint-disable-line no-undef
  it('should POST /api/Signers', function () { // eslint-disable-line no-undef
    return request
      .post('/api/Signers')
      .send({ name: 'Foo', email: 'foo@bar.com', group: false })
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.eql({ id: 1, name: 'Foo', email: 'foo@bar.com', group: false })
      })
  })

  it('should GET /Signers', function () { // eslint-disable-line no-undef
    return request
      .get('/api/Signers')
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.eql([{ id: 1, name: 'Foo', email: 'foo@bar.com', group: false }])
      })
  })

  // TODO ensure all hidden endpoints
  it('should not find GET /api/Signers/count', function () { // eslint-disable-line no-undef
    return request
      .get('/api/Signers/count')
      .then((res) => {
        expect(res.status).to.equal(404)
      })
  })
})
