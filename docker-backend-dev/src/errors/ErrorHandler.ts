import { Response } from "express" 

/* The message errors will be in the format
{
    status: "error",
    statusCode,
    name,
    message
}
*/

export class ErrorHandler extends Error {
    statusCode: number

    constructor(statusCode: number, name: string, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.name = name
    }
}

export const handleError = (err: ErrorHandler, res: Response) => {
    const { statusCode, message, name } = err;
    
    return res.status(statusCode).json({
      status: "error",
      statusCode,
      name,
      message
    });
  };
  
