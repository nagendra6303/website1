import React from 'react';
import { useCart } from './CartContext';

const kidsProducts = [
  {
    id: 1,
    name: 'Colorful T-Shirt',
    price: '$18',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjF0QEU17pIaekTVNoPY64YX0pnlQ0qhr-M7yuRgZtJQdXzQg1QlnQbRP4vT2y0ViAjFWsxBckhLXXeG3nEnAbzTfubpLL9jPOYmY8a2QaZ6EGATDIPrs7tA0CEZscmmVQkjcPJVs&usqp=CAc',
  },
  {

    id: 2,

    name: 'Cartoon Hoodie',

    price: '$30',

    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ3ZbtzCD6I0EUOujvCoeiIyskus--MQi6aD-9il-fE-Ft8FrgzAlXewLso7Kc3KvCrH2HMmgReCEfDCm2B6NDtWNC4t_0CjW76HCV12nlEpBWEm2EzjHQmMC0yT_hzhw-vTWqSVQ&usqp=CAc'

  },

  {

    id: 3,

    name: 'Playful Shorts',

    price: '$20',

    image: 'https://img.tatacliq.com/images/i20//437Wx649H/MP000000023831518_437Wx649H_202409251249513.jpeg',

  },

  {

    id: 4,

    name: 'Kids T-Shirts',

    price: '$35',

    image: 'https://princess-awesome.com/cdn/shop/articles/FreeToBeKids-Unisex-and-SlimFitTees_square_600x.jpg?v=1495771327',

  },

  {

    id: 5,

    name: 'NECK GIRLS DRESS',

    price: '$45',

    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A22478602/A22478602_BLACK/A22478602_BLACK.jpg_2000Wx3000H',

  },

  {

    id: 6,

    name: 'NECK GIRLS DRESS',

    price: '$45',

    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/S24PCF79/S24PCF79_MULTI/S24PCF79_MULTI.jpg_2000Wx3000H',

  },

  {

    id: 7,

    name: 'SWEATSHIRT',

    price: '$45',

    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A23CMSB202861YE/A23CMSB202861YE_YELLOW/A23CMSB202861YE_YELLOW.jpg_2000Wx3000H',

  },

  {

    id: 8,

    name: 'kurta',

    price: '$45',

    image: 'https://images-magento.shoppersstop.com/pub/media/catalog/product/A231891002/A231891002_PINK/A231891002_PINK.jpg_2000Wx3000H',

  },

  // ... same products
];

function Kids() {
  const { addToCart } = useCart();

  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Banner Section */}
      <div
        className="text-center bg-cover bg-center h-64 sm:h-80 md:h-[400px] flex flex-col items-center justify-center px-4"
        style={{
          backgroundImage:
            "url('https://www.anthrilo.com/cdn/shop/files/anthrilo_lopnight_00.jpg?v=1744035382&width=3840')",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-600 drop-shadow">Kids Collection</h1>
        <p className="text-sm sm:text-lg text-gray-800 mt-2">
          Fun and comfy styles for little ones
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-10">
        {kidsProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
          >
            <div className="w-full aspect-[3/2] overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-yellow-600 font-medium">{product.price}</p>
            <button
              className="mt-3 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;
