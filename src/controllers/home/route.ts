import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import homeController from './HomeController';
import validation from './validation';

const router = Router();

/**
 * @swagger
 * /homes:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns all Home names
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         type: string
 *       - in: query
 *         name: skip
 *         required: true
 *         type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Home
 *         schema:
 *           $ref: '#/definitions/HomeArraySuccess'
 */
router.route('/')
  .get(
    validationHandler(validation.list as any),
    homeController.list,
  );

/**
 * @swagger
 * /homes/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns a Home
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 'Unique id of Home'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/:id')
  .get(
    validationHandler(validation.get as any),
    homeController.get,

  );

/**
 * @swagger
 * /homes:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Creates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePost'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/')
  .post(
    validationHandler(validation.create as any),
    homeController.create,
  );

/**
 * @swagger
 * /homes:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Updates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Updated home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePut'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/')
  .put(
    validationHandler(validation.update as any),
    homeController.update,
  );

/**
 * @swagger
 * /homes/{id}:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Deletes a Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Original id of the home ie to be deleted
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/DeleteSuccess'
 */
router.route('/:id')
  .delete(
    validationHandler(validation.delete as any),
    homeController.delete,
  );
export default router;
