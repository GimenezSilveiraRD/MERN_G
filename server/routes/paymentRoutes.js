const express = require('express');
const router = express.Router();
const stripe = require('../stripe');

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; 
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', 
      
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
