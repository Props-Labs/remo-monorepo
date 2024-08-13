/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "remo_HASURA_SERVICE": {
      "type": "sst.aws.Service"
    }
    "remo_POSTGRESDB": {
      "clusterArn": string
      "database": string
      "host": string
      "password": string
      "port": number
      "secretArn": string
      "type": "sst.aws.Postgres"
      "username": string
    }
  }
}
export {}
