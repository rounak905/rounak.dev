import React, { useEffect, useRef, useState } from 'react';

export default function Cursor({ size = 40 }) {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const previousPos = useRef({ x: -size, y: -size });
  const targetPos = useRef({ x: -size, y: -size });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (!cursorRef.current) return;

      const currentX = previousPos.current.x;
      const currentY = previousPos.current.y;
      const targetX = targetPos.current.x - size / 2;
      const targetY = targetPos.current.y - size / 2;

      const deltaX = (targetX - currentX) * 0.2;
      const deltaY = (targetY - currentY) * 0.2;

      const newX = currentX + deltaX;
      const newY = currentY + deltaY;

      previousPos.current = { x: newX, y: newY };
      cursorRef.current.style.transform = `translate(${newX}px, ${newY}px)`;

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      setVisible(true);
      targetPos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [size]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
}
