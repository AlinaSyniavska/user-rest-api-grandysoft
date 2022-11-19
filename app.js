require('dotenv').config();
const {config} = require('./configs');

const express = require('express');

const app = express();

const {userRouter} = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        error: err.message || 'Unknown Error',
        code: err.status || 400,
    });
});

app.listen(config.PORT, () => {
    console.log(`Started on port ${config.PORT}`);
});
