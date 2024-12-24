import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm';

const stripePromise = loadStripe('pk_test_stripe');

describe('PaymentForm', () => {
  it('should call onSuccess with the payment method ID when submitted', async () => {
    const onSuccess = jest.fn();
    
    render(
      <Elements stripe={stripePromise}>
        <PaymentForm price={10} onSuccess={onSuccess} />
      </Elements>
    );

    const cardNumber = screen.getByLabelText('Card number');
    const expiry = screen.getByLabelText('Expiration date');
    const cvc = screen.getByLabelText('CVC');

    fireEvent.change(cardNumber, { target: { value: '4242424242424242' } });
    fireEvent.change(expiry, { target: { value: '12/24' } });
    fireEvent.change(cvc, { target: { value: '123' } });

    fireEvent.click(screen.getByText('Pay $10'));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith(expect.any(String));
    });
  });
}); 