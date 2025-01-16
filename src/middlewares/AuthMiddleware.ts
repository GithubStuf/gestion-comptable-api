import { Request, Response, NextFunction } from 'express';

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Ici, vous pouvez valider le token (par exemple, avec JWT)
    // Si le token est valide, appelez next() pour passer au prochain middleware
    // Sinon, renvoyez une erreur 401

    next();
};