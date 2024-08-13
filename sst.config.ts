/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {

    return {
      name: "remo-monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          version: "6.41.0"
        }
      },
    };
  },
  async run() {

    //run postgres serverless database
    const {database} = await import("./infra/database"); 

    //run hasura w/ postgres serverless
    const {addHasuraService} = await import("./infra/hasura"); 
    const hasura_service = await addHasuraService(database)

    $resolve([hasura_service.url]).apply(([url]) => {
      console.log('hasura_service.url', hasura_service.url)
    });

    //console.log('hasura_service', hasura_service)

    //run frontend
    await import("./infra/frontend"); 


   
  },
});
