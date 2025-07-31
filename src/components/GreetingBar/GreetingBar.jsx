import React, { useState, useRef } from 'react'; // Import useState and useRef
import './GreetingBar.css';

const GreetingBar = ({ text }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // State to store tilt angles
  const barRef = useRef(null); // Ref to access the DOM element

  const handleMouseMove = (e) => {
    if (!barRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = barRef.current.getBoundingClientRect();

    // Calculate the center of the bar
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate position relative to the center (-1 to 1 range, approx)
    // Offset X: mouseX from center, normalized by half width
    // Offset Y: mouseY from center, normalized by half height
    const offsetX = (clientX - centerX) / (width / 2);
    const offsetY = (clientY - centerY) / (height / 2);

    // Determine tilt angles (adjust maxTiltDegree for stronger/weaker effect)
    const maxTiltDegree = 10; // Max rotation in degrees
    const tiltY = offsetX * maxTiltDegree; // Mouse X affects rotation around Y-axis
    const tiltX = -offsetY * maxTiltDegree; // Mouse Y affects rotation around X-axis (inverted for natural feel)

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    // Reset tilt to 0 when mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={barRef} // Attach the ref to the div
      className="greeting-bar"
      onMouseMove={handleMouseMove} // Add mouse move listener
      onMouseLeave={handleMouseLeave} // Add mouse leave listener
      style={{
        // Apply the transform based on tilt state
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {text}
    </div>
  );
};

export default GreetingBar;