import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
    <Header />
      <main className="mt-[2%]">{children}</main>
      <Footer />
    </>
  );
};
