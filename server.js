const PORT = process.env.PORT || 3001;
const e = require('express');
const express = require('express');
const app = express();
const { animals } = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parce incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parce incoming JSON data
app.use(express.json());
// use routers 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// make front end static resources
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});