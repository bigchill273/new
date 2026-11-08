"use client";

import { NAV_LINKS } from "../constants";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "../constants";

function Navbar() {
  const [isFloating, setIsFloating] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsFloating(latest > 100);
  });

  return (
    <header className="max-h-1/8 w-full fixed top-0 left-5 pt-2 md:py-5">
      <motion.nav
        className="container flex items-center justify-between"
        animate={{
          width: isFloating ? "min(90%, 1200px)" : "100%",
          paddingInline: isFloating ? 16 : 0,
          marginBlockStart: isFloating ? 28 : 0,
          boxShadow: isFloating
            ? "0 8px 30px rgba(0,0,0,0.12)"
            : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
        }}
      >
        <a
          href="#"
          className="text-2xl font-bold bg-emerald-500/10 backdrop-blur-lg rounded-full p-2.5 hover:text-primary"
        >
          NS{/*<span className="text-primary">.</span>*/}
        </a>

        {/* Desktop Navbar */}
        <div className="w-5/10 -mr-14 py-3 bg-emerald-500/10 backdrop-blur-lg flex  items-center justify-around rounded-3xl gap-1">
          {NAV_LINKS.map((link: NavLink) => (
            <motion.a
              href={link.href}
              key={link.id}
              className="text-md font-bold text-muted-foreground hover:text-primary"
              animate={{
                color: isFloating
                  ? "var(--color-foreground)"
                  : "var(--color-foreground)/40",
              }}
              whileHover={{
                color: "var(--color-primary)",
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <div className="hidden md:block">
        <Button size="sm">Contact Me</Button>
      </div>
    </header>
  );
}

export default Navbar;
