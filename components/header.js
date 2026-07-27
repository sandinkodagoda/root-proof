"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="RootProof home" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">R</span>
        <span className="brand-name">RootProof</span>
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`site-nav${isOpen ? " open" : ""}`} id="site-nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/book-demo"
          className={pathname === "/book-demo" ? "nav-cta active" : "nav-cta"}
          onClick={() => setIsOpen(false)}
        >
          Book a Demo
        </Link>
      </nav>
    </header>
  );
}
