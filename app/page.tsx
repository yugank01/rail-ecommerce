"use client";
import Banner from "@/components/frontend/Banner";
import Cart from "@/components/frontend/Cart";
import Feature from "@/components/frontend/Feature";
import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import TrendingProduct from "@/components/frontend/TrendingProduct";
import { useState } from "react";

// import Popup from "@/components/admin_panel/Popup";
// import Image from "next/image";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  // const [openPopup, setOpenPopup] = useState(true)
  // const [updateTable, setUpdateTable] = useState(true)

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProduct />
      <Banner />
      <Footer />
      {/* {openPopup && (
        <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
      )} */}
    </main>
  );
}
