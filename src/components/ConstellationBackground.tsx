import React, { useEffect, useRef } from 'react';

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes definition
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const nodeColors = [
      { fill: 'rgba(34, 211, 238, 0.85)', glow: 'rgba(34, 211, 238, 0.4)' }, // Cyan
      { fill: 'rgba(96, 165, 250, 0.85)', glow: 'rgba(59, 130, 246, 0.4)' }, // Sky Blue
      { fill: 'rgba(168, 85, 247, 0.85)', glow: 'rgba(168, 85, 247, 0.4)' }, // Violet
      { fill: 'rgba(52, 211, 153, 0.85)', glow: 'rgba(16, 185, 129, 0.4)' }  // Emerald
    ];

    const nodeCount = Math.min(Math.floor((width * height) / 22000), 65);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const palette = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
        color: palette.fill,
        glowColor: palette.glow,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Mouse coordinates
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Orbital Ellipses (as seen in reference screenshot)
      ctx.save();
      const centerX = width * 0.5;
      const centerY = height * 0.38;

      // Orbit Ring 1 - Cyan / Deep Blue
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, width * 0.42, height * 0.28, -0.22, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.07)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Orbit Ring 2 - Violet / Indigo
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, width * 0.55, height * 0.36, 0.18, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Orbit Ring 3 - Outer sweeping arc
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, width * 0.68, height * 0.45, -0.35, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      // 2. Update and draw nodes
      const maxDistance = 125;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0) { node.x = 0; node.vx *= -1; }
        if (node.x > width) { node.x = width; node.vx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; }
        if (node.y > height) { node.y = height; node.vy *= -1; }

        // Subtle mouse repulsion
        const dxMouse = node.x - mouseX;
        const dyMouse = node.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120 && distMouse > 0) {
          const force = (120 - distMouse) / 120;
          node.x += (dxMouse / distMouse) * force * 1.2;
          node.y += (dyMouse / distMouse) * force * 1.2;
        }

        // Draw node with soft glow
        node.pulsePhase += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulsePhase) * 0.4;

        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        // 3. Draw connection lines between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
