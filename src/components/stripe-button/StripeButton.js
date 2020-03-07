import React from "react";
import StripeCheckout from "react-stripe-checkout";

// 4242 4242 4242 4242 01/20 123

const StripeCheckoutButton = ({ price }) => {
  // Stripe wants to be in cents
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_tzRy4r17taXaagFATrY2Z1Hx003F1dxoVe";

  const onTokenSubmit = token => {
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Riot Merch"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onTokenSubmit}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
