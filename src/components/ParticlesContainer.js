import React, { useRef, useEffect } from "react";

const ParticlesContainer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);
    let animationId;
    const mouse = { x: null, y: null, radius: 180 };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    // Listen on window so mouse works even when hovering over text/images above canvas
    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseout", handleMouseLeave);

    // Particles
    const COUNT = 80;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.baseSpeedX = (Math.random() - 0.5) * 1.5;
        this.baseSpeedY = (Math.random() - 0.5) * 1.5;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        if (mouse.x != null && mouse.y != null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 8;
            this.y += Math.sin(angle) * force * 8;
          }
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(230, 142, 46, " + this.opacity + ")";
        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new Particle());

    function drawLinks() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(245, 211, 147, " + (0.4 * (1 - dist / 150)) + ")";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => { p.update(); p.draw(); });
      drawLinks();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesContainer;
