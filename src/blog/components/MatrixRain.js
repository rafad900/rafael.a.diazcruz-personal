import React, { useRef, useEffect, useState, useCallback } from 'react';

// --- Helper function for drawing a single frame ---
// This function takes all necessary drawing parameters as arguments
const drawMatrixFrame = (ctx, canvas, drops, charArray, fontSize) => {
  // Clear canvas with translucent black for the trail effect
  ctx.fillStyle = "rgba(0,0,0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text style for the characters
  ctx.fillStyle = "rgba(33, 117, 23, 0.8)"; // Pinkish/Red text
  ctx.font = `${fontSize}px arial`;

  // Loop through each "drop" (column)
  for (let i = 0; i < drops.length; i++) {
    // Pick a random character from the defined set
    const text = charArray[Math.floor(Math.random() * charArray.length)];

    // Draw the character at its current position
    // x = column index * font size, y = drop's row * font size
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset the drop to the top if it has crossed the screen
    // with a 2.5% chance (Math.random() > 0.975) for scattering
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.998) {
      drops[i] = 0; // Reset to top
    }

    // Move the drop down for the next frame
    drops[i]++;
  }
};

const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const lastFrameTime = useRef(0);
  const THROTTLE_INTERVAL = 50; // Throttle to roughly 20 FPS (1000ms / 20 = 50ms)


  const [canvasDimensions, setCanvasDimensions] = useState({
    width: window.innerWidth - 10,
    height: window.innerHeight,
  });

  const fontSize = 10;
  const matrixChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const charArray = matrixChars.split("");

  const dropsRef = useRef([]); // Ref to hold the mutable drops array

  // Memoized function to initialize/reset drops
  const initializeDrops = useCallback((canvasWidth) => {
    const columns = Math.floor(canvasWidth / fontSize);
    dropsRef.current = Array(columns).fill(0).map(() => 1); // Reset all drops to y=1
  }, []);

  // Effect for handling canvas setup and animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasDimensions.width ;
    canvas.height = canvasDimensions.height;

    initializeDrops(canvasDimensions.width);

    // --- The main animation loop function (cleaner now) ---
    const animate = () => {
      // Always request the next frame to keep the loop alive
      animationFrameId.current = requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = now - lastFrameTime.current;

      // Only draw if enough time has passed based on throttle interval
      if (elapsed > THROTTLE_INTERVAL) {
        lastFrameTime.current = now; // Update last draw time

        // Call the separate drawing helper function
        drawMatrixFrame(ctx, canvas, dropsRef.current, charArray, fontSize );
      }
    };

    // Start the animation loop
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup function for when the component unmounts or dependencies change
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [canvasDimensions, initializeDrops, charArray, fontSize]); // Added fontSize to dependencies

  // Effect for handling window resize (remains the same)
  useEffect(() => {
    const handleResize = () => {
      setCanvasDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      initializeDrops(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initializeDrops]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block' }}
    ></canvas>
  );
};

export default MatrixRain;