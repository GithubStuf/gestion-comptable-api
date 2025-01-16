import { PrismaClient } from '@prisma/client';

// Initialisation de PrismaClient
const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Active les logs pour le débogage
});

// Exportez l'instance de PrismaClient
export { prismaClient };