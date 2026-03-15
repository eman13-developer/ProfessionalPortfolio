// 'use client';
// import { useEffect, useRef } from 'react';

// function SplashCursor(){

// useEffect(()=>{

// const cursor = document.querySelector(".custom-cursor");

// const moveCursor = (e)=>{
// cursor.style.left = e.clientX + "px";
// cursor.style.top = e.clientY + "px";
// };

// window.addEventListener("mousemove",moveCursor);

// return ()=>{
// window.removeEventListener("mousemove",moveCursor);
// };

// },[]);

// return <div className="custom-cursor"></div>;

// }

// export default SplashCursor;





'use client'
import { useEffect, useRef } from "react";

export default function SplashCursor() {

  const cursorRef = useRef(null);

  useEffect(() => {

    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const speed = 0.2; // jitna zyada utna fast follow karega

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {

      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px,0)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}