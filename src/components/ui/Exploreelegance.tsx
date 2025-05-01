export default function Exploreelegance() {
  return (
    <>
      <div className="container mx-auto mt-10 px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Explore Elegance</h2>
          <div className="mx-auto mt-3 w-48 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-items-center">
          <div className="flex flex-col gap-4">
            <div className="relative w-[250px] h-[400px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Rectangle 2.png"
              />
              <h3 className="absolute top-50 left-20  text-white text-4xl ">
                Men
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-[200px] h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Rectangle 3.png"
              />
              <h3 className="absolute top-15 left-15 text-black text-xl font-bold ">
                Woman
              </h3>
            </div>
            <div className="relative w-[200px] h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Rectangle 4.png"
              />
              <h3 className="absolute top-15 left-15 text-white text-2xl font-bold ">
                Shirts
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative w-[200px] h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Rectangle 6.png"
              />
              <h3 className="absolute top-15 left-15 text-white text-2xl font-black ">
                Suits
              </h3>
            </div>
            <div className="relative w-[200px] h-[150px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Rectangle 5.png"
              />
              <h3 className="absolute top-15 left-15 text-black text-2xl font-bold">
                Pants
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
