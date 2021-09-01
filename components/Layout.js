import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Routes from "../utils/Routes";

import { useRouter } from "next/router";

const defaultProps = {
  navbar: true,
  footer: true,
};

export default function Layout({ children }) {
  const router = useRouter();
  let routeProp =
    Routes.find((r) => r.path === router.pathname) || defaultProps;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} display={routeProp.navbar} />
      <main>{children}</main>
      <Footer display={routeProp.footer} />

      <style jsx>
        {`
          main {
            transition: margin-left 0.3s ease;
            margin-left: ${open ? "300px" : "0"};
            min-height: 100vh;
          }

          @media screen and (max-width: 768px) {
            main {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
}
