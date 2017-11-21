const server = require('./server')
const ds = server.dataSources.db
const lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role']
const strategy = process.env.DB_MIGRATE_STRATEGY === 'drop' ? 'automigrate' : 'autoupdate'

ds[strategy](lbTables, function (er) {
  if (er) throw er
  console.log(`${strategy} Loopback tables ${lbTables.join(', ')} in `, ds.adapter.name)
  ds.disconnect()
})
