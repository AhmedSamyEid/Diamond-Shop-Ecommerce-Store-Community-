export default function Events() {
  const events = [
    {
      img: "/images/Rectangle 13 (14).png",
      timer: "3 : 12 : 48 : 34",
      value: 60,
    },
    {
      img: "/images/Rectangle 13 (15).png",
      timer: "3 : 12 : 48 : 34",
      value: 58,
    },
    {
      img: "/images/Rectangle 13 (16).png",
      timer: "3 : 12 : 48 : 34",
      value: 90,
    },
    {
      img: "/images/Rectangle 13 (17).png",
      timer: "3 : 12 : 48 : 34",
      value: 24,
    },
  ];

  return (
    <div className="max-w-7xl  mt-20">
      <h2 className="text-4xl text-center">Events</h2>
      <div className="mx-auto mt-2 w-40 h-2  rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-pink-500"></div>

      <div className="flex flex-wrap justify-center mt-10 gap-7  md:ml-20">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative w-[250px] h-[180px] rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={event.img}
              alt="event"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-20 left-12   text-2xl text-white px-2 py-1 rounded  font-semibold">
              {event.timer}
            </div>

            <div className="absolute  bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-pink-500 via-purple-500 to-transparent text-center flex items-center justify-center text-black font-bold text-xl">
              {event.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
