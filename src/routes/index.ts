import { Router } from 'express';

import { PREFIX_ROUTE } from '../core/url'; // Prefix Global route
import { clientRoutes } from './client.routes';
import { marcheRoutes } from './marche.routes';
import { devisRoutes } from './devis.routes';

const routes = Router();

routes.use(`${PREFIX_ROUTE}/clients`, clientRoutes);
routes.use(`${PREFIX_ROUTE}/marches`, marcheRoutes);
routes.use(`${PREFIX_ROUTE}/devis`, devisRoutes);

export { routes };