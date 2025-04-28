import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function pagLaout() {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}