const express = require('express');
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Asegúrate de pasar el monto correcto desde el cliente
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', // o la moneda que prefieras
      // puedes añadir más opciones aquí según sea necesario
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
