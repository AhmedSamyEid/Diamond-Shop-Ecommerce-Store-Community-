import { useEffect, useState } from "react";
const demoCart = [
  {
    id: 1,
    title: "Smart Watch",
    price: 128,
    image: "/images/Rectangle 2.png",
    colors: ["#00ff00", "#ff00ff", "#00ffff"],
    quantity: 1,
  },
  {
    id: 2,
    title: "White T-Shirt",
    price: 128,
    image: "/images/Rectangle 3.png",
    colors: ["#ffff00", "#00ff00", "#000000"],
    quantity: 1,
  },
  {
    id: 3,
    title: "Black Skirt",
    price: 128,
    image: "/images/Rectangle 13 (4).png",
    colors: ["#ff00ff", "#00ffff", "#000000"],
    quantity: 1,
  },
];

localStorage.setItem("cart", JSON.stringify(demoCart));

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  colors: string[];
  quantity: number;
}

export default function YourCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const totalItemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 128;
  const total = totalItemsPrice + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl text-center font-semibold mb-4">Your Cart</h2>
      <div className="w-60 h-2 mx-auto bg-gradient-to-r from-cyan-400 to-pink-500 mb-10 rounded"></div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 rounded object-cover md:w-60 h-auot "
              />
              <div className="flex-1 bg-gray-800 bg-opacity-80 text-white  p-4 rounded-lg shadow-md flex flex-col">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-1 mt-2">
                  {item.colors.map((color, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-full`}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-400 font-bold">
                    {item.price}$
                  </span>
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">
                    {item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-b from-gray-800 to-black text-white rounded-lg p-6 shadow-lg">
          <h4 className="text-xl font-semibold mb-4">Summary</h4>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>{shipping}$</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{totalItemsPrice}$</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t border-gray-600 pt-2">
            <span>Total</span>
            <span>{total}$</span>
          </div>
          <button className="w-full mt-6 py-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold rounded-lg shadow">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
