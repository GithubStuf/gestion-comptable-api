import { Request, Response, NextFunction } from "express";

export const ErrorInternal = (
  err: Error,
  _request: Request, // Prefix with underscore to indicate it's unused
  response: Response,
  _next: NextFunction // Prefix with underscore to indicate it's unused
) => {
  // Log the error for debugging
  console.error(err.stack);

  // Handle specific types of errors
  if (err.name === "ValidationError") {
    return response.status(400).json({
      message: "Validation Error",
      details: err.message,
    });
  }

  // Handle all other errors
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
    details: err.message, // Include the error message for debugging
  });
};