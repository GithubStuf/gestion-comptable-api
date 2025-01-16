import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { routes } from './routes';
import { ErrorInternal } from './helpers/ErrorInternal';

// Initialisation du serveur Express
const server = express();

// Middlewares généraux
server.use(express.json()); // Pour parser les requêtes JSON
server.use(cors()); // Pour gérer les CORS
server.use(express.urlencoded({ extended: true })); // Pour parser les requêtes URL-encoded
server.use(morgan('dev')); // Pour logger les requêtes

// Routes principales
server.use(routes);

// Middleware de gestion des erreurs personnalisé (ErrorInternal)
server.use(ErrorInternal);

// Export du serveur
export { server };