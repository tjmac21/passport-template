const request = require('supertest');
const app = require('../../app');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

describe('POST /create-checkout-session', () => {
  it('should create a new Stripe Checkout session', async () => {
    const res = await request(app)
      .post('/payments/create-checkout-session')
      .send({ price: 10 });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });
});

describe('POST /webhook', () => {
  it('should handle the checkout.session.completed event', async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Test Session',
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    const event = stripe.webhooks.generateTestHeaderString({
      id: 'evt_test_webhook',
      type: 'checkout.session.completed',
      data: {
        object: session,
      },
    });

    const res = await request(app)
      .post('/payments/webhook')
      .set('stripe-signature', event)
      .send();

    expect(res.statusCode).toEqual(200);
    // TODO: Check that the database was updated correctly
  });
}); 