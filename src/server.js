const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb+srv://guto5749:recanto5749@omnistack.rrtu7.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(express.json());
app.use(routes);

app.listen(3333);