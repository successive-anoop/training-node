import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import userController from './UserController';
import validation from './validation';

const router = Router();

/**
 * @swagger
 * /Users:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Returns all User names
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
 *         description: An array of User
 *         schema:
 *           $ref: '#/definitions/UserArraySuccess'
 */
router.route('/')
  .get(
    validationHandler(validation.list as any),
    userController.list,
  );

/**
 * @swagger
 * /Users/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Returns a User
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 'Unique id of User'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A User
 *         schema:
 *           $ref: '#/definitions/UserObjectSuccess'
 */
router.route('/:id')
  .get(
    validationHandler(validation.get as any),
    userController.get,

  );

/**
 * @swagger
 * /Users:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Creates a new User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: User name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/UserObjectSuccess'
 */
router.route('/')
  .post(
    validationHandler(validation.create as any),
    userController.create,
  );

/**
 * @swagger
 * /Users:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Updates a new User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Updated User name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserPut'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/UserObjectSuccess'
 */
router.route('/')
  .put(
    validationHandler(validation.update as any),
    userController.update,
  );

/**
 * @swagger
 * /Users/{id}:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Deletes a User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Original id of the User ie to be deleted
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A User
 *         schema:
 *           $ref: '#/definitions/DeleteSuccess'
 */
router.route('/:id')
  .delete(
    validationHandler(validation.delete as any),
    userController.delete,
  );


// /**
//  * @swagger
//  * /Users:
//  *   get:
//  *     security:
//  *       - Bearer: []
//  *     tags:
//  *       - User
//  *     description: Returns all User names
//  *     parameters:
//  *       - in: query
//  *         name: limit
//  *         required: true
//  *         type: string
//  *       - in: query
//  *         name: skip
//  *         required: true
//  *         type: integer
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: An array of User
//  *         schema:
//  *           $ref: '#/definitions/UserArraySuccess'
//  */
//  router.route('/login')
//  .post(
//    validationHandler(validation.login as any),
//    userController.login,
//  );
export default router;
