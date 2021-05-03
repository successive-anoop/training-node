import { checkSchema, validationResult } from 'express-validator/check';
import * as mongoose from 'mongoose';
import StatusCodes from './StatusCodes';
import SystemResponse from './SystemResponse';

export const generateObjectId = () =>
  mongoose.Types.ObjectId();

export const isValidObjectId = (id: any) =>
  mongoose.Types.ObjectId.isValid(id);

export const isValidEmail = (email:string)=>
  email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  //new RegExp(@`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).test(email)

export const errorHandler = ( isLogging ) => ( err, req, res, next ) => {
  if (res.headersSent) { return next(err) }

  const { message, status, error } = err;

  const result = {
      message: message || 'error',
      status: status || 500,
      error: error || 'undefined',
      timestamp: new Date(),
  }

  // If user wants loggin of the errors.
  // if ( isLogging ) 
  // logger.error(result);

  res.status(result.status).json(result);
};


const validationHandler = ( validator ) => {
  return [
    checkSchema(validator) as any,
    ( req, res, next ) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(SystemResponse.badRequestError('', errors.array().map(({ location, param, msg }) => ({ location, param, msg }))));
      }
      next();
    }
  ]
}

export {
  StatusCodes, SystemResponse, validationHandler
};


