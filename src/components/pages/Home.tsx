import Events from "../ui/Events";
import Products from "../ui/Products";
import Horesidar from "../ui/Horesidar";
import Exploreelegance from "../ui/Exploreelegance";

export default function Home() {
  return (
    <>
      <div className="container">
        <div>
          <Horesidar />
        </div>
        <div>
          <Exploreelegance />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Events />
        </div>
      </div>
    </>
  );
}
