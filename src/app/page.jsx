import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donation from "./components/Donation";
import Nearby from "./components/Nearby";

export default function Home() {
  return (
    <>
    <Header/>
    <Donation/>
    <Nearby/>
    <Footer/>
    </>
  );
}
