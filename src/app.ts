import dotenv from 'dotenv';
import express from 'express';
import MainRouter from './routes/MainRouter';
import helmet from 'helmet';
import errorHandler from './middlewares/Error.middleware';
import notFoundHandler from './middlewares/NotFound.middleware';
var cors = require('cors')

// Load the environment variables from the .env file
dotenv.config({
  path: './environment/.env'
});

// Initialization
class Server {
  public app = express();
  public router = MainRouter;
}
const server = new Server();

// Configuration
server.app.use(helmet());
server.app.use(cors());

server.app.use('/', server.router);

// Middleware
server.app.use(errorHandler);
server.app.use(notFoundHandler);

// make server listen on some port
((port = process.env.APP_PORT || 3001) => {
  server.app.listen(port, () => console.log(`- Listening on port ${port}`));
})();