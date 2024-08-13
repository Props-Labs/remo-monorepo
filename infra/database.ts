import {vpc} from './vpc'

export const database = new sst.aws.Postgres(`${process.env.BASE_PROJECT_PREFIX}_POSTGRESDB`, { databaseName: process.env.BASE_PROJECT_PREFIX, vpc, version:'16.3' });
