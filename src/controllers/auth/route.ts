import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import authController from './AuthController';
import validation from './validation';

const router = Router();


/**
 * @swagger
 * /auth/login/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: login authentication
 *     parameters:
 *       - email: password
 *         in: path
 *         description: 'email and password'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: JSON web token
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/')
  .post(
    validationHandler(validation.login as any),
    authController.login,
  );

export default router;
