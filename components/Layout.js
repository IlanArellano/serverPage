import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <main>{children}</main>
      <Footer />

      <style jsx>
        {`
          main {
            transition: margin-left 0.3s ease;
            margin-left: ${open ? "300px" : "0"};
          }
        `}
      </style>
    </>
  );
}
