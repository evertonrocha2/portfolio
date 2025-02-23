'use client'
import { useEffect, useRef } from "react";

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const noise = Math.random() * 255;
        pixels[i] = pixels[i + 1] = pixels[i + 2] = noise;
        pixels[i + 3] = 30;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      generateNoise();
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute opacity-40 inset-0 w-full h-full z-[2] pointer-events-none"
    />
  );
}