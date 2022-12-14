// Lord, I thank you for this beautiful rainy day. I thank you for the opportunities you've provided me. Thank you for Your goodness and faithfulness. Please help me to finish this project before going camping. I appreciate all you do. I love you Lord!

import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import petRoutes from './routes/petRoutes';
import { db } from './models';
import { defaultPets } from './controllers/petController';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', {layout: 'layout'});

app.use('/pets', petRoutes);
app.use('/', defaultPets);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "So sorry! This is not the URL you are looking for!!"
    });
})

db.sync().then(() => {
    console.info("We're connected to the petDB database!")
});

app.listen(3000);