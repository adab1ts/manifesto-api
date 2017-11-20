const { request, expect } = require('../common')

describe('API surface', function () { // eslint-disable-line no-undef
  it('should POST /api/Signers', function () { // eslint-disable-line no-undef
    return request
      .post('/api/Signers')
      .send({ name: 'Foo', email: 'foo@bar.com', group: false })
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.eql({ name: 'Foo', group: false })
        return res
      })
  })
})
