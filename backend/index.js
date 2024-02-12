const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nakulsharma:nakul@cluster0.3vsuq74.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Db Connected Successfully"))
.catch((err)=>console.log(err));

const cors = require('cors');
app.use(cors());

app.use(express.json());

const auth = require('./Routes/auth');
const notes = require('./Routes/notes');
app.use('/api/v2/auth',auth);
app.use('/api/v2/notes',notes);

app.listen(5000,()=>{
    console.log("Serve is working fine");
});



