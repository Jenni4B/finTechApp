import express from 'express';
import sequelize from './database.js';
import routes from '../routes/index.js';

sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Error connecting to database: ', err));

app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
