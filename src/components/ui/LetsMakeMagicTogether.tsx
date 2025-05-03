export default function LetsMakeMagicTogether () {
  const sidbasrs = [
  
    {
      src: "/images/Rectangle 45.png",
      alt: "woman",
      titel: "Let's Make Magic TogetherDiamond Threads",
      description:
        "Drop us a line or give us a call - we're here to turn your dreams into reality.",
    },
  ]
  
  return (
    <>
  <div className="sliders flex flex-wrap">
      {sidbasrs.map((item, index) => (
        <div
          key={index}
          className={`sider relative w-full $? "block" : "hidden"}`}
        >
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover "
            src={item.src}
            alt={item.alt}
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-cente  p-6 rounded-lg max-w-1x ">
            <h1 className="text-xl  sm:text-3xl lg:text-5xl font-bold mb-2">
              {item.titel}
            </h1>
            <p className="text-sm sm:text-base ">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}