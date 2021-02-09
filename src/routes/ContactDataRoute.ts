import { NextFunction, Request, Response, Router } from 'express';
import ContactDataController from '../controllers/ContactDataController'

class ContactDataRouter {
  private _router = Router();
  private _controller = ContactDataController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    
    this._router.get('/', (req: Request, res: Response) => {
      try {
        const items = this._controller.getAllContactData();
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json(error.message);
      }
      
    });

    this._router.get('/:id', (req: Request, res: Response) => {
      try {
        const items = this._controller.getContactDataById(req.params.id);
        res.status(200).json(items);  
      } catch (error) {
        res.status(400).json(error.message)
      }
    });
  }
}

export = new ContactDataRouter().router