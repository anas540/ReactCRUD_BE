const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const userRoute = require('./Routes/user');

//Database Connectivity
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactDB', {useNewUrlParser: true,useCreateIndex:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected")
});




app.use(cors());
app.use(express.json())
app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})