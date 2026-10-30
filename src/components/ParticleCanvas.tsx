import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface ParticleCanvasHandle {
  spawnSparks: (x: number, y: number) => void;
  spawnConfetti: () => void;
}

interface ParticleCanvasProps {
  activeEmbers: boolean;
  emberIntensity?: 'moderate' | 'intense';
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  wobbleSpeed: number;
  wobblePhase: number;
  color: string;
}

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  color: string;
  alpha: number;
}

const TRICOLOR_PALETTE = ['#002395', '#FFFFFF', '#ED2939', '#F59E0B', '#3B82F6', '#FCD34D'];
const GOLD_SPARK_PALETTE = ['#FCD34D', '#F59E0B', '#FDE68A', '#FFFFFF', '#FFA500'];
const EMBER_PALETTE = ['#F97316', '#F59E0B', '#EF4444', '#FBBF24', '#C084FC'];

export const ParticleCanvas = forwardRef<ParticleCanvasHandle, ParticleCanvasProps>(
  ({ activeEmbers, emberIntensity = 'moderate' }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sparksRef = useRef<Spark[]>([]);
    const embersRef = useRef<Ember[]>([]);
    const confettiRef = useRef<Confetti[]>([]);
    const animIdRef = useRef<number | null>(null);

    useImperativeHandle(ref, () => ({
      spawnSparks(x: number, y: number) {
        const count = 35;
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 6 + 2;
          sparksRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 1.5,
            size: Math.random() * 3.5 + 1.5,
            color: GOLD_SPARK_PALETTE[Math.floor(Math.random() * GOLD_SPARK_PALETTE.length)],
            alpha: 1,
            decay: Math.random() * 0.025 + 0.02,
          });
        }
      },
      spawnConfetti() {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const width = canvas.width / (window.devicePixelRatio || 1);
        const count = 110;
        for (let i = 0; i < count; i++) {
          confettiRef.current.push({
            x: Math.random() * width,
            y: -20 - Math.random() * 100,
            vx: (Math.random() - 0.5) * 6,
            vy: Math.random() * 4 + 3,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 8,
            width: Math.random() * 10 + 6,
            height: Math.random() * 6 + 4,
            color: TRICOLOR_PALETTE[Math.floor(Math.random() * TRICOLOR_PALETTE.length)],
            alpha: 1,
          });
        }
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const handleResize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      let lastTime = performance.now();

      const loop = (time: number) => {
        const dt = Math.min((time - lastTime) / 1000, 0.1);
        lastTime = time;

        const dpr = window.devicePixelRatio || 1;
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        ctx.clearRect(0, 0, width, height);

        // 1. Spawning rising embers if active
        if (activeEmbers) {
          const spawnChance = emberIntensity === 'intense' ? 0.35 : 0.18;
          if (Math.random() < spawnChance) {
            embersRef.current.push({
              x: Math.random() * width,
              y: height + 10,
              vx: (Math.random() - 0.5) * 1.5,
              vy: -(Math.random() * 2.5 + 1.2),
              size: Math.random() * 3.5 + 1.5,
              alpha: Math.random() * 0.7 + 0.3,
              wobbleSpeed: Math.random() * 3 + 1,
              wobblePhase: Math.random() * Math.PI * 2,
              color: EMBER_PALETTE[Math.floor(Math.random() * EMBER_PALETTE.length)],
            });
          }
        }

        // 2. Render and update Embers
        for (let i = embersRef.current.length - 1; i >= 0; i--) {
          const e = embersRef.current[i];
          e.y += e.vy;
          e.x += e.vx + Math.sin(time * 0.003 * e.wobbleSpeed + e.wobblePhase) * 0.6;
          e.alpha -= dt * 0.18;

          if (e.y < -10 || e.alpha <= 0) {
            embersRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, e.alpha);
          ctx.shadowBlur = 8;
          ctx.shadowColor = e.color;
          ctx.fillStyle = e.color;
          ctx.beginPath();
          ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 3. Render and update Sparks
        for (let i = sparksRef.current.length - 1; i >= 0; i--) {
          const s = sparksRef.current[i];
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 4.5 * dt; // Gravity
          s.alpha -= s.decay;

          if (s.alpha <= 0) {
            sparksRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, s.alpha);
          ctx.shadowBlur = 10;
          ctx.shadowColor = s.color;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 4. Render and update Confetti
        for (let i = confettiRef.current.length - 1; i >= 0; i--) {
          const c = confettiRef.current[i];
          c.x += c.vx;
          c.y += c.vy;
          c.rotation += c.rotationSpeed;
          if (c.y > height + 20) {
            confettiRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = c.alpha;
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.fillRect(-c.width / 2, -c.height / 2, c.width, c.height);
          ctx.restore();
        }

        animIdRef.current = requestAnimationFrame(loop);
      };

      animIdRef.current = requestAnimationFrame(loop);

      return () => {
        if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
        window.removeEventListener('resize', handleResize);
      };
    }, [activeEmbers, emberIntensity]);

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-30 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
    );
  }
);
