"use client";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export const Navbar = () => {
  const { width } = useWindowSize();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHideNavbar, setShowHideNavbar] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShowHideNavbar("-translate-y-20");
      } else {
        setShowHideNavbar("shadow-md border-b bg-primary-foreground");
      }
    } else {
      setShowHideNavbar("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (width < 800) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [width]);

  return (
    <>
      {mobileMenu ? (
        <MobileNavbar showHideNavbar={showHideNavbar} />
      ) : (
        <DesktopNavbar showHideNavbar={showHideNavbar} />
      )}
    </>
  );
};
