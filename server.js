
const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');

// use apiRoutes
app.use('/api', apiRoutes);

// express middleware
app.use(express.urlencoded({ exteended: false }));
app.use(express.json());

// default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// function that will start express server on port 3001
// start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
