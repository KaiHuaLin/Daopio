const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const pollRouter = require('./routes/poll');
const responseRouter = require('./routes/response');

app.use('/poll', pollRouter);
app.use('/response', responseRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})