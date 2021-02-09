import { Request, Response, NextFunction, response } from "express";
import HttpException from "../common/HttpException";

const errorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.statusCode | 500;
    const message = error.message || "It's not you. It's us. We are having some problems.";

    response.status(status).send(message);
}

export default errorHandler;