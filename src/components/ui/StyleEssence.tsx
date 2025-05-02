export default function StyleEssence() {
  const img = [{ src: "/images/Rectangle 35.png", alt: "Background Image" }];
  const cat = [
    {
      src: "/images/cat 1.png",
      alt: "cat",
      title: "Style Essence",
      description:
        "Step into the limelight with our latest collection at Radiant Revolutions. Our designs transcend conventional boundaries, merging avant-garde concepts with timeless elegance.",
    },
  ];

  return (
    <div className="relative w-full">
      {img.map((item, index) => (
        <div key={index}>
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-[100vh] object-cover"
          />
        </div>
      ))}

      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        {cat.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center justify-center gap-6 max-w-6xl mx-auto px-4`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-[80%] md:w-[60%] h-auto object-cover shadow-xl rounded-lg"
            />
            <div className="bg-white bg-opacity-80 text-black p-6 md:w-1/2 rounded shadow-md mt-4 md:mt-0">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
