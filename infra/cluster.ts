import {vpc} from './vpc'
export const cluster = new sst.aws.Cluster(`${process.env.BASE_PROJECT_PREFIX}_CLUSTER`, { vpc });