import { Request, Response } from 'express';

export const ErrorHandlerMiddleware = (err: Error, _req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};