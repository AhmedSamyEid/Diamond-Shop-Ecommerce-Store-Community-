export default function AboutOurCompany() {
  const aboutItems = [
    {
      img: "/images/Rectangle 20.png",
      title: "Harmony",
      description:
        "In the tapestry of life, harmony is the gentle melody that soothes the soul and brings color to chaos. It is the seamless blending of disparate elements into a symphony of peace and purpose. Harmony is the art of active listening, where hearing turns to mutual flow. It is manifesting fresh, heartfelt connection, offering a sense of peace and tranquility in a world often filled with noise.",
    },
    {
      img: "/images/Rectangle 20 (1).png",
      title: "Contrast",
      description:
        "Contrast is the bold stroke that adds drama and depth to the canvas of existence. It is the sharp juxtaposition of light and dark, of rough and smooth, that commands attention and ignites the imagination.",
    },
  ];

  return (
    <div className="max-w-7xl  mt-20 px-4">
      <h2 className="text-4xl font-semibold text-center">About Our Company</h2>
      <div className="mx-auto my-2 w-48 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

      <div className="mt-10 space-y-10">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full  md:w-[60%]  h-auto object-cover"
            />
            <div className="bg-neutral-900 bg-opacity-80 text-white p-6 md:w-1/2">
              <h3 className="text-6xl  mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
