import React from "react";

interface FeatureImages {
  src: string;
  alt: string;
}

const spotlightImages: FeatureImages[] = [
  { src: "/images/Rectangle 39.png", alt: "Fabric" },
  { src: "/images/Rectangle 40.png", alt: "Texture" },
  { src: "/images/Rectangle 41.png", alt: "Design" },
];

const bottomGalleryImages: FeatureImages[] = [
  { src: "/images/Rectangle 6.png", alt: "Collection 1" },
  { src: "/images/Rectangle 42.png", alt: "Collection 2" },
  { src: "/images/Rectangle 4.png", alt: "Collection 3" },
];

const SpotlightOnSignatureFeatures: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl ">
          Spotlight on Signature Features
        </h2>
        <div className="mt-5 mx-auto w-100 h-1.5 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[400px]">
          {spotlightImages.map((img, i) => {
            const positions = [
              "top-0 left-0 z-10",
              "top-6 left-8 sm:top-8 sm:left-16 z-20",
              "top-12 left-16 sm:top-14 sm:left-32 z-30",
            ];
            return (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${positions[i]}`}
              />
            );
          })}
        </div>

        <div className="relative md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 opacity-40 rounded-lg z-0"></div>
          <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Unveiling the Essence of Our Design Identity
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In this section, we delve deep into the heart of our brand’s DNA,
              highlighting the features that define our design identity. From
              intricate craftsmanship to innovative technologies, each detail is
              crafted to reflect our dedication to creativity and excellence.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Discover the unique characteristics that distinguish our creations
              and immerse yourself in the story behind each masterpiece.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bottomGalleryImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`w-full h-40 object-cover rounded ${
              i === 2 ? "hidden md:block" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SpotlightOnSignatureFeatures;
