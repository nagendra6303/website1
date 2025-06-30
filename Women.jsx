import React from 'react';
import { useCart } from './CartContext';

const womenProducts = [
  {
    id: 1,
    name: 'Floral Dress',
    price: '$45',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_Z8sFbFlWiR9r9k2G7UYB2elj79F4AWrUWfUZtPsWBThJE2sg7dbHQIH2i-FloVeSHySozUlA8FZkssaGGlESfcS9wGIt5Hnxzik9q9BTB58Nu6ulyYcY',
  },
  {
    id: 2,
    name: 'Casual Top',
    price: '$25',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCUUkGBYTXbKRYfFSMNVGgTo9NKvojAXLgi_O121w0gT7-FQ_TnRFcCsZWL01MO0wmF1tkWm3ltAPxtGUtAhky7dTqkNValvMD1CAmmk8f0x-JD_dgaPUX3w',
  },
  {
    id: 3,
    name: 'Denim Skirt',
    price: '$35',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_nj2p7R1alrUnL_hai6L6qvoKWb5BhMA8FtN9AiU2BQi40mfzI_5gDb6E1A36EAREWy8VmSlhldfdmBHJabhZPfuF5L8J9rjLjylYNARQHm2BudRzezkn6w',
  },
  {
    id: 4,
    name: 'Saree',
    price: '$90',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTVKi1i_wtNmXo992BQuGv0-sW2XyHiyl2ndZOuJAuNs0cJuPb6iRcSUHx0S5G29Szsa5UlOKx23EDEeAvFr-Q8K6iAdmllZ6bi2iPsXOBfJDZkz6OA6rH-g',
  },
  {
    id: 5,
    name: 'Neck Womens Top',
    price: '$30',
    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/SS23LQB9838/SS23LQB9838_RED/SS23LQB9838_RED.jpg_2000Wx3000H',
  },
  {
    id: 6,
    name: 'Full Length Dress',
    price: '$80',
    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/SS25LQD11047/SS25LQD11047_ROSE/SS25LQD11047_ROSE.jpg_2000Wx3000H',
  },
  {
    id: 7,
    name: 'Casual Wear Shirt',
    price: '$40',
    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/SS25LQB11068/SS25LQB11068_GREEN/SS25LQB11068_GREEN.jpg_2000Wx3000H',
  },
  {
    id: 8,
    name: 'Shirt',
    price: '$70',
    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/SS25LQB11094/SS25LQB11094_MAROON/SS25LQB11094_MAROON.jpg_2000Wx3000H',
  },
];

function Women() {
  const { addToCart } = useCart();

  return (
    <div className="bg-pink-50 min-h-screen">

      {/* Banner */}
      <section className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat bg-[url('https://cmsimages.shoppersstop.com/EOSS_preview_sale_web_7ffc245564/EOSS_preview_sale_web_7ffc245564.png')] flex items-center justify-center">
        
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womenProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg w-full h-60 sm:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-pink-600 font-bold mt-1">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Women;
