
module.exports = {
  
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  testing: {
    client: 'sqlite3', // our DBMS driver
    connection: {
      filename: './data/test.db3', // the location of our db
    },
    useNullAsDefault: true, // necessary when using sqlite3 to prevent bugs and issues
    migrations: {
      directory: './data/migrations' // not required
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },

  staging: {
  },

  production: {
  }
};
