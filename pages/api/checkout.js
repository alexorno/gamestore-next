import Stripe from 'stripe';


const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {allowed_countries: ['US']},
        shipping_options:[
          {shipping_rate: 'shr_1N0qHNLh6ggLou085oG9ZzDZ'}
        ],
        line_items: req.body.cartItems.map((item) => {
          const image = item.image[0].asset._ref
          const convertedImg = image.replace('image-', 'https://cdn.sanity.io/images/dqvsoeaz/production/').replace('-png', '.png')

          return{
            price_data: {
              currency: 'USD',
              product_data: {
                name: item.title,
                desciption: item.desciption,
                images: [convertedImg],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity
          }
        }),
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      // console.log(session)
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}