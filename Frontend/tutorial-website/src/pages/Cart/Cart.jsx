import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const stripePromise = loadStripe(
  "pk_test_51PEZKgFyJBRUueSyFycylCj5ikfe1TPRfFamJnPVrpf83HLsQxim5LUBXf557DRsCjuNbl15PZUCzzoMfs9fdjQt00LXpq1ce4"
);

const CheckoutPage = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
        <ToastContainer />
      </Elements>
    </>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [orders, setOrders] = useState([]);
  const [cardholderName, setCardholderName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found in session storage");
      }
      const response = await axios.get(
        "http://localhost:3001/api/order/getOrderDetails",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: cardholderName,
          email: customerEmail,
          address: {
            line1: billingAddress,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:3001/api/payment/create",
        {
          paymentMethod: paymentMethod.id,
          cardholderName,
          customerEmail,
          billingAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Display payment success toast
      toast.success(response.data.message);
      window.location.href = "/";
    } catch (error) {
      // Display payment error toast
      toast.error(error.message || "An error occurred during payment.");
    }
  };

  return (
    <div className="container">
      <div className="window">
        <div className="order-info">
          <div className="order-info-content">
            <h2 className="order">Order Summary</h2>
            <div className="line"></div>
            <div className="products">
              {orders.map((order, orderIndex) => (
                <div key={orderIndex} className="order-item">
                  <h3>Order #{orderIndex + 1}</h3>
                  {order.products.map((product, productIndex) => (
                    <div key={productIndex} className="product-cards">
                      <img
                        src={product.product_image}
                        alt="Product"
                        className="product-image"
                      />
                      <div className="product-details">
                        <p>Name: {product.name}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="line"></div>
            {orders.length > 0 && (
              <div className="total-amount">
                Total Amount: ${orders[0].totalAmount.toFixed(2)}
              </div>
            )}
          </div>
        </div>
        <div className="credit-info">
          <div className="credit-info-content">
            <h2 className="payment">Payment Information</h2>
            <form onSubmit={handleSubmit}>
              {/* Cardholder Name */}
              <label>
                Cardholder Name:
                <input
                  type="text"
                  className="input-field"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  required
                />
              </label>
              {/* Customer Email */}
              <label>
                Customer Email:
                <input
                  type="email"
                  className="input-field"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                />
              </label>
              {/* Billing Address */}
              <label>
                Billing Address:
                <input
                  type="text"
                  className="input-field"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                  required
                />
              </label>
              {/* Card Number */}
              <label>
                Card Number:
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                      },
                    },
                    hidePostalCode: true, // Hide the postal code field
                    iconStyle: "solid", // Use solid icons for better compatibility
                  }}
                  className="payment-field"
                />
              </label>

              <button type="submit" className="pay-btn" disabled={!stripe}>
                Confirm & Pay $
                {orders.length > 0 ? orders[0].totalAmount.toFixed(2) : "0.00"}
              </button>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
