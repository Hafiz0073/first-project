import { Request, Response, NextFunction } from 'express';
const globalErrorHandlers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};
export default globalErrorHandlers;
