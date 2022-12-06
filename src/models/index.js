// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Employees } = initSchema(schema);

export {
  Employees
};