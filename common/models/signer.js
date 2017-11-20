'use strict';

module.exports = function(Signer) {

  // Validate the email is well formed
  Signer.validatesFormatOf('email', { with: /(.+)@(.+){2,}\.(.+){2,}/ });

  // Validate the email to be unique
  Signer.validatesUniquenessOf('email');

};
