'use strict'

module.exports = function (Signer) {
  // Validate the email is well formed
  Signer.validatesFormatOf('email', { with: /(.+)@(.+){2,}\.(.+){2,}/ })

  // Validate the email to be unique
  // TODO: Create an operation hook to check for uniqueness in PG
  Signer.validatesUniquenessOf('email')

  // TODO: Set created_at property value
  Signer.observe('before save', function (ctx, next) {
    if (ctx.instance) {
    }
    return next()
  })
}
