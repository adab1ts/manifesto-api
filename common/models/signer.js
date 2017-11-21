'use strict'

module.exports = function (Signer) {
  // Only expose create and find
  // Signer.disableRemoteMethodByName("find")                                 // disables GET /Signers
  // Signer.disableRemoteMethodByName("create")                               // disables POST /Signers
  Signer.disableRemoteMethodByName('upsert')                               // disables PATCH /Signers
  Signer.disableRemoteMethodByName('replaceOrCreate')                      // disables PUT /Signers

  Signer.disableRemoteMethodByName('prototype.updateAttributes')           // disables PATCH /Signers/{id}
  Signer.disableRemoteMethodByName('findById')                             // disables GET /Signers/{id}
  Signer.disableRemoteMethodByName('exists')                               // disables HEAD /Signers/{id}
  Signer.disableRemoteMethodByName('replaceById')                          // disables PUT /Signers/{id}
  Signer.disableRemoteMethodByName('deleteById')                           // disables DELETE /Signers/{id}

  Signer.disableRemoteMethodByName('prototype.__get__accessTokens')        // disable GET /Signers/{id}/accessTokens
  Signer.disableRemoteMethodByName('prototype.__create__accessTokens')     // disable POST /Signers/{id}/accessTokens
  Signer.disableRemoteMethodByName('prototype.__delete__accessTokens')     // disable DELETE /Signers/{id}/accessTokens

  Signer.disableRemoteMethodByName('prototype.__findById__accessTokens')   // disable GET /Signers/{id}/accessTokens/{fk}
  Signer.disableRemoteMethodByName('prototype.__updateById__accessTokens') // disable PUT /Signers/{id}/accessTokens/{fk}
  Signer.disableRemoteMethodByName('prototype.__destroyById__accessTokens')// disable DELETE /Signers/{id}/accessTokens/{fk}

  Signer.disableRemoteMethodByName('prototype.__count__accessTokens')      // disable  GET /Signers/{id}/accessTokens/count

  Signer.disableRemoteMethodByName('prototype.verify')                     // disable POST /Signers/{id}/verify
  Signer.disableRemoteMethodByName('changePassword')                       // disable POST /Signers/change-password
  Signer.disableRemoteMethodByName('createChangeStream')                   // disable GET and POST /Signers/change-stream

  Signer.disableRemoteMethodByName('confirm')                              // disables GET /Signers/confirm
  Signer.disableRemoteMethodByName('count')                                // disables GET /Signers/count
  Signer.disableRemoteMethodByName('findOne')                              // disables GET /Signers/findOne

  Signer.disableRemoteMethodByName('resetPassword')                        // disables POST /Signers/reset
  Signer.disableRemoteMethodByName('setPassword')                          // disables POST /Signers/reset-password
  Signer.disableRemoteMethodByName('update')                               // disables POST /Signers/update
  Signer.disableRemoteMethodByName('upsertWithWhere')                      // disables POST /Signers/upsertWithWhere

  // Validate the email is well formed
  Signer.validatesFormatOf('email', { with: /(.+)@(.+){2,}\.(.+){2,}/ })

  // Validate the email to be unique
  // TODO: Create an operation hook to check for uniqueness in PG
  Signer.validatesUniquenessOf('email')

  // TODO: Set created_at property value
  Signer.observe('before save', function (ctx, next) {
    if (ctx.instance) {
      // Capitalize name parts
      ctx.instance.name = ctx.instance.name && ctx.instance.name.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1, w.length))
        .join(' ')

      ctx.instance.email = ctx.instance.email && ctx.instance.email.toLowerCase()
    }
    return next()
  })
}
