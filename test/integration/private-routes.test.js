const { app, request, expect } = require('../common')

describe('API surface', function () { // eslint-disable-line no-undef
  // TODO ensure all hidden endpoints
  it('should not find PUT /api/Signers/count', function () { // eslint-disable-line no-undef
    return request
      .put('/api/Signers')
      .send([])
      .then((res) => {
        expect(res.status).to.equal(404)
        return res
      })
  })
})

after(function () {  // eslint-disable-line no-undef
  app.dataSources.db.disconnect()
})
