import Router from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const movies= require('../samples.json');

console.log(movies);
const routerMovies = Router();

routerMovies.get('/', (req, res) => {
    res.json(movies);
});

routerMovies.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating){
        console.log(movies.lenght);
        const id= movies.lenght + 1;
        const newMovie= {id, ...req.body};
        console.log(newMovie);

        res.json('saved');
    } else {
        res.send('Wrong Request');
    }
    //res.send('recibido');
});

export default routerMovies;