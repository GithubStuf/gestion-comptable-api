import { Router } from 'express';

import { PREFIX_ROUTE } from '../core/url'; // Prefix Global route
import { clientRoutes } from './client.routes';
import { marcheRoutes } from './marche.routes';

const routes = Router();

routes.use(`${PREFIX_ROUTE}/clients`, clientRoutes);
routes.use(`${PREFIX_ROUTE}/marches`, marcheRoutes);

export { routes };