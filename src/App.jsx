import styles from "./App.module.css";
import React, { useEffect, useRef } from "react";
import Profile from "./components/Profile/profile";

function App() {
  const auraRef = useRef(null); // Create a reference for the aura element

  useEffect(() => {
    // Function to update the position of the aura
    const updateAuraPosition = (e) => {
      if (auraRef.current) {
        // Set the mouse position as CSS variables on the aura element
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    // Add event listener to track the mouse movement
    window.addEventListener("pointermove", updateAuraPosition);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount
  return (
    <>
      <div className={styles.App}>
        <div ref={auraRef} className="mouse-aura"></div>
        <Profile />
      </div>
    </>
  );
}

export default App;
