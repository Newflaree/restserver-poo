const express = require( 'express' );
const cors = require( 'cors' );

class Server {
  constructor() {
    this.app = express();
    this.port= process.env.PORT;
    this.usuarioPath = '/api/usuarios';
    
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }  

  middlewares() {
    // CORS
    this.app.use( cors() );

    // Lectura y parseo del body
    this.app.use( express.json() );

    // Public directory
    this.app.use( express.static( 'public' ) );
  }

  routes() {
    this.app.use( this.usuarioPath, require( '../routes/user.routes' ) );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log( 'Corriendo en el puerto: ', this.port );
    });
  }
}

module.exports = Server;
