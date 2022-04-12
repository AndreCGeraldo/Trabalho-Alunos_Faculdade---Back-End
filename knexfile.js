module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './data/faculdade.db3'
    },
    useNullAsDefault: true,    
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }  
  },
};