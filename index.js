const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');

dotenv.config({path:'./config/config.env'});

const app = express();

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public'))); 
const PORT = process.env.PORT || 5000;

app.get('/', function(req, res, next){
    res.send('Hello world');
})

const server = app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`.blue.bold);
})

//Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});