module.exports = {
  db: {
    name: 'db',
    connector: process.env.DB_CONNECTOR,
    url: process.env.DB_URL
  }
}
