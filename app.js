const express = require('express');
const app = express();
const tasks = require('./router/task');

const connectDB = require('./DB/connection');
//access .env file, npm i dotenv
require('dotenv').config()

app.use(express.static('./public'))
//to have data in req.body
app.use(express.json());

//get all tasks route
app.use('/api/v1/tasks', tasks);

const port = 3000;

//do this so database is connected before server is connected
const start = async () => {
  try {
      //access env key with process.env
    await connectDB(process.env.MONGOURL);
    console.log('Mongoose connected')
    app.listen(port, (req, res) => {
      console.log('listening to 3000');
    });
  } catch (error) {}
};
//remmeber to call the function 
start()