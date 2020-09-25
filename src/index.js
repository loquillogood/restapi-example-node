import express from 'express';  //framwork para node que nos facilita la creación de aplicaciones en menos tiempo
import logger from 'morgan';    //Para ver por consola lo que está llegando al servidor
import router from './routes/index.js';
import routerMovies from './routes/movies.js';


const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares 
//morgan: Ver por consola lo que va llegando al servidor
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes
//app.use(require('./routes/index'));
app.use(router);
app.use('/api/movies', routerMovies);

//Starting the server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})