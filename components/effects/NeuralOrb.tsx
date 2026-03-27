'use client';

import { useEffect, useRef } from 'react';

export default function NeuralOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 600;

    const cx = 300, cy = 300;
    const nodeCount = 24;
    const colors = ['#7c3aed', '#2563eb', '#059669', '#db2777', '#d97706'];

    interface Node {
      angle: number; speed: number; size: number;
      color: string; orbitR: number; layer: number;
    }

    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => {
      const layer = Math.floor(i / 8);
      return {
        angle: (i / 8) * Math.PI * 2 + layer * 0.5,
        speed: (Math.random() * 0.005 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 3 + 2,
        color: colors[i % colors.length],
        orbitR: 80 + layer * 75 + Math.random() * 20,
        layer,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, 600, 600);
      timeRef.current += 0.008;
      const t = timeRef.current;

      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55);
      coreGrad.addColorStop(0, 'rgba(124, 58, 237, 0.5)');
      coreGrad.addColorStop(0.4, 'rgba(37, 99, 235, 0.15)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      [80, 140, 200, 260].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r + 4 * Math.sin(t + i), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(109, 40, 217, ${0.06 + 0.03 * Math.sin(t * 1.5 + i)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      nodes.forEach((node) => {
        node.angle += node.speed;
        const wobble = 7 * Math.sin(t * 1.2 + node.angle * 3);
        const nx = cx + (node.orbitR + wobble) * Math.cos(node.angle);
        const ny = cy + (node.orbitR + wobble) * Math.sin(node.angle);

        const lineGrad = ctx.createLinearGradient(cx, cy, nx, ny);
        lineGrad.addColorStop(0, 'rgba(109, 40, 217, 0.08)');
        lineGrad.addColorStop(1, `${node.color}22`);
        ctx.beginPath();
        ctx.moveTo(cx, cy); ctx.lineTo(nx, ny);
        ctx.strokeStyle = lineGrad; ctx.lineWidth = 0.5; ctx.stroke();

        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, node.size * 4);
        ng.addColorStop(0, `${node.color}99`);
        ng.addColorStop(1, `${node.color}00`);
        ctx.beginPath();
        ctx.arc(nx, ny, node.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = ng; ctx.fill();

        ctx.beginPath();
        ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color; ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].layer !== nodes[j].layer) continue;
          const ax = cx + nodes[i].orbitR * Math.cos(nodes[i].angle);
          const ay = cy + nodes[i].orbitR * Math.sin(nodes[i].angle);
          const bx = cx + nodes[j].orbitR * Math.cos(nodes[j].angle);
          const by = cy + nodes[j].orbitR * Math.sin(nodes[j].angle);
          const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - dist / 160) * 0.1})`;
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }

      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#7c3aed'; ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ maxWidth: '600px', maxHeight: '600px' }} />;
}
