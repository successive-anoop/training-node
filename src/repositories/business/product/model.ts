import * as mongoose from 'mongoose';

import IProductModel from './IModel';
import ProductSchema from './schema';

/**
 * Product Schema
 */
/**
 * @swagger
 * definitions:
 *   ProductPost:
 *     properties:
 *       name:
 *         type: string
 *   ProductPut:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *   ProductResponse:
 *     properties:
 *       name:
 *         type: string
 *       id:
 *         type: string
 *       originalId:
 *         type: string
 *       createdAt:
 *         type: string
 *   ProductArraySuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: integer
 *         example: 200
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/ProductResponse'
 *   ProductObjectSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Success
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/ProductResponse'
 *   DeleteSuccess:
 *     properties:
 *       message:
 *         type: string
 *         example: Deleted
 *       status:
 *         type: string
 *         example: 200
 *       data:
 *         type: object
 *         $ref: '#/definitions/Delete'
 *   Delete:
 *     properties:
 *       n:
 *         type: string
 *         example: 1
 *       nModified:
 *         type: string
 *         example: 1
 *       ok:
 *         type: string
 *         example: 1
 */

export const productSchema = new ProductSchema({
  collection: 'Products',
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
  toObject: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
    virtuals: true,
  },
});

/**
 * Add your
 * - pre-save hook
 * - validation
 * - virtual
 */
productSchema.pre('save', (next: any) => {
  // this.updateDate = new Date();
  next();
});

/**
 * Indicies
 */
productSchema.index({ name: 1 }, { unique: true });

/**
 * Methods
 */
productSchema.method({});

/**
 * Statics
 */
productSchema.statics = {};

/**
 * @typedef Product
 */

export const productModel: mongoose.Model<IProductModel> = mongoose.model<IProductModel>
  (
    'Product',
    productSchema,
    'Products',
     true,
  );
