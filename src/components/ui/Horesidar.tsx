import { useState } from "react";

export default function Horesidar() {
  const sidbasrs = [
  
    {
      src: "/images/Rectangle 45.png",
      alt: "woman",
      titel: "Diamond Threads",
      description:
        "Where style meets timelessness, offering curated fashion for every moment.",
    },
    {
      src: "/images/Rectangle 51 (1).png",
      alt: "woman",
      titel: "Diamond Threads",
      description:
        "Where style meets timelessness, offering curated fashion for every moment.",
    },
    {
      src: "/images/woman 1.png",
      alt: "woman",
      titel: "Diamond Threads",
      description:
        "Where style meets timelessness, offering curated fashion for every moment.",
    },
    {
      src: "/images/Rectangle 51.png",
      alt: "woman",
      titel: "Diamond Threads",
      description:
        "Where style meets timelessness, offering curated fashion for every moment.",
    },
    {
      src: "/images/Rectangle 30.png",
      alt: "woman",
      titel: "Diamond Threads",
      description:
        "Where style meets timelessness, offering curated fashion for every moment.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(Math.trunc(sidbasrs.length /2));
  function pagantion(index: number) {
    setCurrentIndex(index);
  }
  return (
    <>
    <div className="flex flex-wrap justify-center w-full  ">
  <div className="wrapper relative w-full max-w-screen-xl">
    <div className="sliders flex flex-wrap">
      {sidbasrs.map((item, index) => (
        <div
          key={index}
          className={`sider relative w-full ${index === currentIndex ? "block" : "hidden"}`}
        >
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] md:ml-9 object-cover "
            src={item.src}
            alt={item.alt}
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-cente  p-6 rounded-lg max-w-1x ">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold mb-2">
              {item.titel}
            </h1>
            <p className="text-sm sm:text-base ">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>


    <div className="absolute w-full bottom-5">
      <ul className="flex items-center justify-center gap-2">
        {sidbasrs.map((_, index) => (
          <li
            key={index}
            onClick={() => pagantion(index)}
            className={`${
              index === currentIndex
                ? "border-2 border-white bg-red-500"
                : "bg-[#808080]"
            } w-4 h-4 rounded-full cursor-pointer`}
          ></li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </>
  );
}
