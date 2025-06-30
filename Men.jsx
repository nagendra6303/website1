import React from 'react';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    name: 'Shirts',
    price: '$25.00',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9Cw1uDb9srldgqdmsIRdM2FFXAJucgYYUtEwjAJTJ0hQLz-NE2DPBxMKKuYSDBpdtTznmvuHF7G7IrejyGpOeCM2N9PN7EbHO9HN_OlbOFUSyVcHowdmyNQ',
  },
  {
    id: 2,
    name: 'Jeans',
    price: '$40.00',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6jDXi8Sb7JB4OM4A_ZziqxuDTEraxxL9gim1NaestAK-9Mt2JBc4uvmcMPC4fxoY8rx8X2CyXC1DNVPpzyvErwR2g3CV5YTxSfJ13JQAnAlUF537TTt5xdg',
  },
  {
    id: 3,
    name: 'Hoodies',
    price: '$60.00',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1uRFMvvbUKETS_QiNgaTE7XKYIftzb1qBwxL80057hZOuBFZB7vh-wUtN4uVbpCouMjI-9hDKAl7TB2R2VCpOaewHoCHyg3VBjiJ6EKlsHQOO-rOA82IW',
  },
  {
    id: 4,
    name: 'T-Shirts',
    price: '$80.00',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGSOX9juc1Sm3j3ZZp9TKmdWVO0TudiwHIU4oXQMKrHT1K-Ipi2FCYuD7Q6BMWLnASe8wLmvN1x51Erze_Gc8tSHT8dIPAMnaLAg92YJZWsAXmgTolOH84',
  },
  {
    id: 5,
    name: 'Formal Shirt',
    price: '$35.00',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQXTTTSA_0dSgSmSdH2t3sPqJW2LeiyvQHDJUkwx33-rKREN-EaomU6WW6xD9TTxnJ1E_3tjk4OILxjOIVzMZgb-Qoxe58v3gdMCfxvLTpHQ6WxylXseoWBdA',
  },
  {
    id: 6,
    name: 'Cargo Pants',
    price: '$150.00',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzQ7UW1NJ0tnlRZ10KUqJxcWjTZbcWgnlaWLB0Z1c9ZimMvOs3oDAYXNgy4Xhyks8De8Yb4i5EQPB3WI-7ebvCkPHt9pkxyGxA5Wzgsadpo7DwB2fCVU4ZRfA',
  },
  {
    id: 7,
    name: 'Casual Blazer',
    price: '$110.00',
    image:
      'https://images-magento.shoppersstop.com/pub/media/catalog/product/A23A140JFO35453/A23A140JFO35453_BLACK/A23A140JFO35453_BLACK.jpg_2000Wx3000H',
  },
  {
    id: 8,
    name: 'Festive Wear',
    price: '$130.00',
    image:
      'https://images-magento.shoppersstop.com/pub/media/catalog/product/A24BWCSOLIDMU16/A24BWCSOLIDMU16_MUSTARD/A24BWCSOLIDMU16_MUSTARD.jpg_2000Wx3000H',
  },
  {
    id: 9,
    name: 'Casual Wear Blazer',
    price: '$150.00',
    image:
      'https://images-magento.shoppersstop.com/pub/media/catalog/product/CCS24SBL3683PI/CCS24SBL3683PI_PINK/CCS24SBL3683PI_PINK.jpg_2000Wx3000H',
  },
];

function Men() {
  const { addToCart } = useCart();

  return (
    <div className="bg-blue-50 min-h-screen">
      
      {/* Banner Section */}
      <section className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center bg-no-repeat bg-[url('https://cmsimages.shoppersstop.com/Men_EOSS_preview_sale_web_40a2af1e44/Men_EOSS_preview_sale_web_40a2af1e44.png')] flex items-center justify-center">
        
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-lg w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-indigo-600 font-bold mt-1">{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-auto w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
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

export default Men;
