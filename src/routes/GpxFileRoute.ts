import { NextFunction, Request, Response, Router } from 'express';
import GpxFileController from '../controllers/GpxFileController';

class GpxFileRouter {
  private _router = Router();
  private _controller = GpxFileController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', async (req: Request, res: Response) => {
      try {
        const items = await this._controller.getAllGpxFiles();
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json(error.message)
      }
    });

    this._router.get('/:id', async (req: Request, res: Response) => {
      try {
        const items = await this._controller.getGpxFileById(req.params.id);
        res.status(200).json(items);
      } catch (error) {
        res.status(400).json(error.message);
      }
    });
  }
}

export = new GpxFileRouter().router