import express from 'express';
const router = express.Router();


router.get('/', async (req, res) => {
    // dashboard logic

});

router.get('/transactions', async (req, res) =>{
    // Transaction history logic
    try {
        const transactions = await Transaction.findAll();
        res.render('index', { transactions }); // Render the template with transactions data

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

})

export default router;