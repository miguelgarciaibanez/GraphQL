const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const URL_MLAB = 'mongodb://localhost:27017/gql-ninja';
const cors = require('cors');

mongoose.connect(URL_MLAB , { useNewUrlParser: true });

mongoose.connection.once('open' , () => {
    console.log("connected to db");
});

const app = express();

//allow cross origin request
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('Server listening in port 4000');
})