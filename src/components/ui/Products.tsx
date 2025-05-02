
export default function Products () {
  const products = [
    { name: "Men Sweater", price: "125$", isFeatured: true, img: "/images/Rectangle 7.png" },
    { name: "Woman Sweater", img: "/images/Rectangle 13.png" },
    { name: "Orange T Shirt", img: "/images/Rectangle 13 (1).png" },
    { name: "White T Shirt", img: "/images/Rectangle 13 (2).png" },
    { name: "Green T Shirt", img: "/images/Rectangle 13 (3).png" },
    { name: "Black Dress", img: "/images/Rectangle 13 (4).png" },
    { name: "Jeans", img: "/images/Rectangle 13 (5).png" },
    { name: "Shirt", img: "/images/Rectangle 13 (6).png" },
    { name: "Jacket", img: "/images/Rectangle 13 (7).png" },
    { name: "Hat", img: "/images/Rectangle 20 (1).png" },
    { name: "Red Shirt", img: "/images/Rectangle 13 (9).png" },
    { name: "Blouse", img: "/images/Rectangle 13 (10).png" },
    { name: "Sweter", img: "/images/Rectangle 13 (11).png" },
    { name: "Black T Shirt", img: "/images/Rectangle 13 (12).png" },
    { name: "White Blouse", img: "/images/Rectangle 13 (13).png" },
  ];

  return (
    <div className="max-w-7xl ml-20 mt-30 ">
    
      <h2 className="text-3xl font-bold text-center">Products</h2>
      <div className="mx-auto my-2 w-40 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 "></div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 mt-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-2 rounded shadow relative">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[120px] object-cover rounded"
            />
            <h3 className="text-sm text-center mt-2 font-semibold">{product.name}</h3>

            {product.isFeatured && (
              <div className="absolute top-1 left-1 bg-white bg-opacity-80 p-1 rounded">
                <p className="text-green-600 font-bold text-xs">{product.price}</p>
                <button className="bg-pink-500 text-white text-xs px-2 py-1 rounded mt-1">
                  Buy
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}