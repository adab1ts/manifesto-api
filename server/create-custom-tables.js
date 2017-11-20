const server = require('./server')
const ds = server.dataSources.db
const strategy = process.env.DB_MIGRATE_STRATEGY === 'drop' ? 'automigrate' : 'autoupdate'

function migrate(models) {
  return new Promise((resolve, reject) => {
    ds[strategy](models, function(err, result) {
      if (err) reject(err)
      console.log(`${strategy} models ${models.join(', ')}`)
      ds.disconnect()
      resolve(result)
    })
  })
}

if (require.main === module) {
  const models = ['Signer']
  migrate(models)
    .then(result => console.log(result))
}

module.exports = { migrate }
