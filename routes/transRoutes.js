import express from 'express';
import { Transaction } from '../models/Transaction.js';

const transRoutes = express.Router();
transRoutes.get('/', async (req, res) => {
    // dashboard logic

});

transRoutes.get('/transactions', async (req, res) =>{
    // Transaction history logic
    try {
        const transactions = await Transaction.findAll();
        res.render('index', { transactions }); // Render the template with transactions data

    } catch (error) {
        console.log("Error: " + error);
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

})

export default transRoutes;