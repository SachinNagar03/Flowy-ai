import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav glass">
      <div className="nav-container">
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
            <button className="Navbtn btnGhost">Sign In</button>
            <button className="Navbtn btnHero">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
