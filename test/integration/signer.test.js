const { request, expect } = require('../common')

describe('API surface', function () { // eslint-disable-line no-undef
  it('should POST /api/Signers', function () { // eslint-disable-line no-undef
    return request
      .post('/api/Signers')
      .send({ name: 'Foo', email: 'foo@bar.com', group: false })
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.eql({ name: 'Foo', group: false })
      })
  })

  it('should GET /Signers', function () { // eslint-disable-line no-undef
    return request
      .get('/api/Signers')
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.eql([{ name: 'Foo', group: false }])
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

  it('should return order by "name ASC" on GET /api/Signers', function () { // eslint-disable-line no-undef
    let createUser = (user) => {
      return request
        .post('/api/Signers')
        .send(user)
    }

    return Promise.all([
        createUser({ name: 'Bar', email: 'bar@bar.com', group: false }),
        createUser({ name: 'Baz', email: 'baz@bar.com', group: false })
      ])
      .then(() => request.get('/api/Signers'))
      .then((res) => {
        expect(res.body[0].name).to.equal('Bar')
        expect(res.body[1].name).to.equal('Baz')
        expect(res.body[2].name).to.equal('Foo')
      })
  })
})
