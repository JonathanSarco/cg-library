import { Request, Response, NextFunction, response } from "express";

const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
    const message = "Resource not found";

    response.status(404).send(message);
}

export default notFoundHandler;