
import {cluster} from '../cluster'

  export const addHasuraService = async (_database: sst.aws.Postgres): Promise<any> => {
    
    return new Promise((resolve, reject) => {
      $resolve([_database.host, _database.database, _database.username, _database.password, _database.port]).apply(([host, dbname, username, password, port]) => {

        const db_url = `postgresql://${host}/${dbname}`
        console.log('db_url', db_url)
      
        const service = cluster.addService(`${process.env.BASE_PROJECT_PREFIX}_HASURA_SERVICE`, {
          link:[_database],
          image:{
            dockerfile: './Dockerfile'
          },
          environment:{

            DATABASE_URL: db_url,
            PORT:8080
          },
          public: {
            ports: [
              { listen: "8080/http"},
            ],
          },
          dev: {
            command: `HASURA_GRAPHQL_METADATA_DATABASE_URL=$DATABASE_URL HASURA_GRAPHQL_DATABASE_URL=$DATABASE_URL graphql-engine serve --server-port $PORT`,
            // directory: './',
            url: "http://hasura"
          }
        });

        resolve(service);
    })
  });

    

    
  }
  

