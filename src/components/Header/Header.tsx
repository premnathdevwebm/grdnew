import { Link, NavLink } from "react-router-dom";
import {FaEnvelope, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import styles from "components/Header/Header.module.css";
import logo from "components/Header/assets/golden-royce-design-logo-1@2x.png";

const Header = () => {
  const [isVerticalsOpen, setIsVerticalsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsVerticalsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsVerticalsOpen(false);
  };

  const verticalsSubNav = isVerticalsOpen && (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.subNav}
    >
      <div className={styles.colnav}>
      <Link to="/verticals/buzzebee"><h3>BUZZ-BEE</h3></Link>
        <ul>
          <li>
            <Link to="/verticals/buzzebee">From Idea To Icon</Link>
          </li>
        </ul>
      </div>
      <div className={styles.colnav}>
      <Link to="/verticals/itservice"><h3>IT SERVICES & SOLUTIONS</h3></Link>
        <ul>
          <li>
            <Link to="/verticals/itservice">Your Vision Our Technology</Link>
          </li>
        </ul>
      </div>
      <div className={styles.colnav}>
      <Link to="/verticals/cyber"> <h3>CYBER SECURITY</h3></Link>
        <ul>
          <li>
            <Link to="/verticals/cyber">Secure Today</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["column-1"]}>
        <div className={styles.row}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
          <div className={styles.gold}>
            <p className={styles.goldenRoyceDesign}>GOLDEN ROYCE DESIGN</p>
            <p className={styles.buisnessMadeSmart}>BUISNESS MADE SMART</p>
          </div>
        </div>
      </div>
      <div className={styles["column-2"]}>
        <div className={styles.row1}>
          <nav className={styles["horizontal-nav"]}>
            <ul className={styles["horizontal-nav1"]}>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F0C545" : "#AD000E" };
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F0C545" : "#AD000E" };
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.dropNav}
              >
                <NavLink
                  to="/verticals"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F0C545" : "#AD000E" };
                  }}
                >
                  <span className={styles.row2}>
                    VERTICALS <FaAngleDown className="icon" />
                  </span>
                </NavLink>
                {verticalsSubNav}
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => {
                    return { color: isActive ? "#F0C545" : "#AD000E" };
                  }}
                >
                  <span className={styles.row2}>
                    <span>CONTACT US</span>
                    <FaEnvelope className="contact-icon" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
