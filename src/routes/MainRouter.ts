import { Router } from 'express';
import ContactDataRoute from './ContactDataRoute'
import AdditionalDataRoute from './AdditionalDataRoute'
import GpxFileRoute from './GpxFileRoute';

class MainRouter {
  private _router = Router();
  
  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/contact-data', ContactDataRoute);
    this._router.use('/additional-data', AdditionalDataRoute);
    this._router.use('/gpx', GpxFileRoute);
  }
}

export = new MainRouter().router;