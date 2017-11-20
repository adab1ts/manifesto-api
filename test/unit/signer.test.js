const { app, expect } = require('../common')

// Get a reference to the Signer model
const Signer = app.models.Signer

describe('Validation', function () { // eslint-disable-line no-undef
  it('should reject a signer with no name', function () { // eslint-disable-line no-undef
    return Promise.resolve()
      .then(() => Signer.create({ name: '', email: 'jane.doe@manifesto.org', group: false }))
      .then(res => Promise.reject(new Error('Signer should not be created')))
      .catch(err => {
        expect(err.message).to.contain('Details: `name` can\'t be blank')
        expect(err.statusCode).to.be.equal(422)
      })
  })

  it('should reject a signer with no email', function () { // eslint-disable-line no-undef
    return Promise.resolve()
      .then(() => Signer.create({ name: 'Jane Doe', email: '', group: false }))
      .then(res => Promise.reject(new Error('Signer should not be created')))
      .catch(err => {
        expect(err.message).to.contain('Details: `email` can\'t be blank')
        expect(err.statusCode).to.be.equal(422)
      })
  })

  it('should reject a bad formed email', function () { // eslint-disable-line no-undef
    return Promise.resolve()
      .then(() => Signer.create({ name: 'Jane Doe', email: 'jane.doe@badformat', group: false }))
      .then(res => Promise.reject(new Error('Signer should not be created')))
      .catch(err => {
        expect(err.message).to.contain('Details: `email` is invalid')
        expect(err.statusCode).to.be.equal(422)
      })
  })

  it('should reject a duplicate email', function () { // eslint-disable-line no-undef
    return Promise.resolve()
      .then(() => Signer.create({ name: 'Jane Doe', email: 'jane.doe@manifesto.org', group: false }))
      .then(() => Signer.create({ name: 'Joanna Doe', email: 'jane.doe@manifesto.org', group: false }))
      .then(res => Promise.reject(new Error('Signer should not be created')))
      .catch(err => {
        expect(err.message).to.contain('Details: `email` is not unique')
        expect(err.statusCode).to.be.equal(422)
      })
  })

  it('should store a correct signer', function () { // eslint-disable-line no-undef
    return Signer.create({ name: 'John Doe', email: 'john.doe@manifesto.org', group: false })
      .then(res => {
        expect(res.name).to.equal('John Doe')
        expect(res.email).to.equal('john.doe@manifesto.org')
        expect(res.group).to.be.false // eslint-disable-line no-unused-expressions
      })
  })
})
