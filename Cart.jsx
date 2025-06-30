import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({});
  const [paymentStatus, setPaymentStatus] = useState(null); // null | 'processing' | 'success'

  useEffect(() => {
    const initial = {};
    cart.forEach((item) => {
      if (!initial[item.id]) {
        initial[item.id] = 1;
      } else {
        initial[item.id] += 1;
      }
    });
    setQuantities(initial);
  }, [cart]);

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        removeFromCart(id);
        delete updated[id];
      }
      return updated;
    });
  };

  const handleRemove = (id) => {
    while (cart.find((item) => item.id === id)) {
      removeFromCart(id);
    }
    setQuantities((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleCheckout = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
      cart.forEach((item) => removeFromCart(item.id)); // clear cart
    }, 2000); // simulate payment delay
  };

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    const quantity = quantities[item.id] || 1;
    return sum + price * quantity;
  }, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">🛒 Your Cart</h1>

      {/* Payment Success Message */}
      {paymentStatus === 'success' ? (
        <div className="text-center">
          <p className="text-green-600 text-xl font-semibold mb-6">✅ Payment Successful!</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Processing State */}
          {paymentStatus === 'processing' && (
            <div className="text-center text-blue-600 font-medium mb-6 text-lg">
              ⏳ Processing Payment...
            </div>
          )}

          {/* Cart Items */}
          <div className="space-y-4">
            {Object.values(
              cart.reduce((acc, item) => {
                if (!acc[item.id]) acc[item.id] = item;
                return acc;
              }, {})
            ).map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-3 py-1 text-xl bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium">
                    {quantities[item.id] || 1}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-3 py-1 text-xl bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-sm hover:underline ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-8 text-right">
            <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              disabled={paymentStatus === 'processing'}
              className="mt-4 w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
