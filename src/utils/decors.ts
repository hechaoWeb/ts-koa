import * as Router from 'koa-router';
import _ from 'lodash';
import Joi from 'joi';

import schema from './validator'
import err from './error'

export const router = new Router();

export const pathBefore = (params:string):any => { 
  return target => {
    target.path = params;
  }
}
const decorate = (method:string) =>(path) => (target,property) => {
  router[method](target.path + path, target[property])
}

export function Valid(customSchema?: Joi.ObjectSchema | string) {
  return (target: Object, propertyKey: string) => {
    let schemaName: string;
    if (_.isString(customSchema)) {
      schemaName = customSchema;
    } else {
      Object.assign(schema, customSchema);
    }
    const method = target[propertyKey];
    target[propertyKey] = async function(...args: Array<any>) {
      if (args.length && schema[schemaName || propertyKey]) {
        const { error } = schema[schemaName || propertyKey].validate(args[0], { allowUnknown: true });
        if (error) {
          throw err.INPUT_ERROR(`[${propertyKey}] ${error}`);
        }
      }
      return await method.apply(this, args);
    };
  };
}

export const get = decorate('get')
export const post = decorate('post')

