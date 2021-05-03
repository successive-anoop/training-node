import { Router } from 'express';

import homeRouter from './controllers/home/route';
import userRouter from './controllers/user/route';
import authRouter from './controllers/auth/route';
import productRouter from './controllers/product/route';
/* tslint:disable: no-var-requires */
const appInfo = require('../package.json');

const router = Router();

/**
 * @swagger
 * /version:
 *   get:
 *     tags:
 *       - General
 *     description: Get Version
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Version Response
 *         schema:
 *           type: object
 *           properties:
 *             version:
 *               type: string
 *               description: Version of the API.
 *             description:
 *               type: string
 *               description: Description of the API.
 *             name:
 *               type: string
 *               description: Name of the API.
 */
router.get('/version', (req, res) => {
  const { version, name, description } = appInfo;
  console.info(`version = ${version}, name = ${name}, description = ${description}`);

  if (!(typeof version && version)) {
    console.error('An error occurred while trying to get version: Version not defined');
    res.status(400).send(new Error('Version not defined'));
  }

  res.json({
    description,
    name,
    version,
  });
});

/**
 * @swagger
 * /health-check:
 *   get:
 *     tags:
 *       - General
 *     description: Health Check for Kuberenetes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I am OK
 */
router.get('/health-check', (req, res) => {
  res.send('I am OK');
});

// mount home routes at /home
router.use('/homes', homeRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/product',productRouter);
export default router;
