import { NextFunction, Request, Response, Router } from 'express';
import AdditionalDataController from '../controllers/AdditionalDataController'

class AdditionalDataRouter {
  private _router = Router();
  private _controller = AdditionalDataController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    
    this._router.get('/', (req: Request, res: Response) => {
      try {
        const items = this._controller.getAllAdditionalQuestions();  
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });

    this._router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
      try {
        const items = this._controller.getAdditionalQuestionById(req.params.id);
        res.status(200).json(items);  
      } catch (error) {
        res.status(400).json(error.message)
      }
    });
  }
}

export = new AdditionalDataRouter().router