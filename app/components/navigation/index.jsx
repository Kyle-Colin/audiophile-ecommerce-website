"use client"

import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const desktopMediaQuery = '(min-width: 768px)'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.matchMedia(desktopMediaQuery).matches);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      const query = window.matchMedia(desktopMediaQuery);

      function handleQueryChange(queryEvent) {
        setIsDesktop(queryEvent.matches);
        if (isOpen) {
          setIsOpen(false);
        }
      }

      query.addEventListener('change', handleQueryChange);

      return () => {
        query.removeEventListener('change', handleQueryChange);
      }

    }, [isOpen])

    return (
      <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
      </div>
    )
}

export default Navigation;
