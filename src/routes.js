/* eslint linebreak-style: ["error", "windows"] */
import { Router } from 'express';

import EmployeeController from './app/controllers/EmployeeController';

const routes = new Router();

routes.post('/employees', EmployeeController.store);

routes.put('/employees/:id', EmployeeController.update);

routes.delete('/employees/:id', EmployeeController.delete);

routes.get('/employees/:id', EmployeeController.getById);

routes.get('/employees', EmployeeController.list);

export default routes;
