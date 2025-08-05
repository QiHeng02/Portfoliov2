import React, { useState, useRef } from 'react'; // Import useState and useRef
import './Navbar.css';

const Navbar = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // State to store tilt angles
  const navbarRef = useRef(null); // Ref to access the DOM element

  const handleMouseMove = (e) => {
    if (!navbarRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = navbarRef.current.getBoundingClientRect();

    // Calculate the center of the navbar
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate position relative to the center (-1 to 1 range, approx)
    const offsetX = (clientX - centerX) / (width / 2);
    const offsetY = (clientY - centerY) / (height / 2);

    // Determine tilt angles (adjust maxTiltDegree for stronger/weaker effect)
    // A navbar might want a more subtle tilt, e.g., 5-7 degrees
    const maxTiltDegree = 7; // Max rotation in degrees (you can adjust this)
    const tiltY = offsetX * maxTiltDegree; // Mouse X affects rotation around Y-axis
    const tiltX = -offsetY * maxTiltDegree; // Mouse Y affects rotation around X-axis (inverted for natural feel)

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    // Reset tilt to 0 when mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  return (
    <nav
      ref={navbarRef} // Attach the ref to the nav element
      className="navbar"
      onMouseMove={handleMouseMove} // Add mouse move listener
      onMouseLeave={handleMouseLeave} // Add mouse leave listener
      style={{
        // Apply the transform based on tilt state
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <ul className="navbar-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#gallery">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://qiheng.framer.website/">Framer Portfolio</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;