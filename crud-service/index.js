import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express(); 
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);


const URL = 'mongodb://user:user@crud-shard-00-00.ozmzj.mongodb.net:27017,crud-shard-00-01.ozmzj.mongodb.net:27017,crud-shard-00-02.ozmzj.mongodb.net:27017/crud?ssl=true&replicaSet=atlas-qh7iy2-shard-0&authSource=admin&retryWrites=true&w=majority'

const PORT = process.env.PORT || '8080'; 
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

