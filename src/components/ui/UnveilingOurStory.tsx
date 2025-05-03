export default function UnveilingOurStory() {
  const aboutItems = [
    {
      img: "/images/Rectangle 20 (1).png",
      title: "Exploring the Heartbeat of Our Brand",
      description:
        "At the core of our brand lies a vibrant tapestry woven with passion, innovation, and dedication. With each stitch and seam, we strive to encapsulate the essence of our ethos, delivering products that not only meet but exceed expectations. Our journey is one of relentless pursuit – of quality, of creativity, of authenticity.Through every collection, every design, we aim to ignite inspiration and forge connections, inviting you to join us on a voyage of discovery where style knows no bounds.",
    },
  ];

  return (
    <>
      <div className="max-w-7xl  mt-20 px-4">
        <h2 className="text-4xl font-semibold text-center">
          Unveiling Our Story
        </h2>
        <div className="mx-auto my-2 w-65 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
        <div className="mt-10 space-y-10">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6`}
            >
              <div className="bg-neutral-800 bg-opacity-80 text-white p-10  md:w-1/2">
                <h3 className="text-4xl  mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full  md:w-[60%]  h-auto object-cover"
              />
            </div>
          ))}
        </div>
        <div className="relative mt-40 w-fit md:ml-16 ">
          <img
            src="/images/Rectangle 38.png"
            alt="background"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 bottom-6  bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-40 mix-blend-multiply rounded "></div>
          <h3 className="relative bottom-50  text-white flex justify-center md:text-3xl ">
            Discover Our Vision
          </h3>
        </div>
      </div>
    </>
  );
}
