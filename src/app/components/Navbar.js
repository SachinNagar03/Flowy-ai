import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav glass">
      <div className="container">
        <div className="navContent">
          {/* Logo */}
          <div className="logo">
            <div className="logoIcon">
              <span>F</span>
            </div>
            <span className="logoText">Flowly</span>
          </div>

          {/* Links */}
          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/Features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/testimonials">Testimonials</Link>
            
          </div>

          {/* Buttons */}
          <div className="navButtons">
            <button className="btn btnGhost">Sign In</button>
            <button className="btn btnHero">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
