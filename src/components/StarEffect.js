import React, { useRef, useEffect } from 'react';

const StarEffect = () => {
    const canvasRef = useRef(null);
    const lastStarCreationTime = useRef(0); // Tracks the last time a star was created

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        const createStar = (x, y) => {
            particles.push({
                x,
                y,
                size: 3 * 3 + 2, // Fixed size for stars
                opacity: 1, // Full opacity initially
                velocityX: (Math.random() - 0.5) * 1.5, // Slow horizontal movement
                velocityY: (Math.random() - 0.5) * 1.5, // Slow vertical movement
                fade: 0.02, // Faster fade for trail effect
                angle: Math.random() * Math.PI * 2,
                spin: Math.random() * 0.05 - 0.025, // Subtle rotation
            });
        };

        const drawStar = (particle) => {
            const { x, y, size, opacity, angle } = particle;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);

            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                ctx.lineTo(0, -size);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, size / 2);
                ctx.rotate(Math.PI / 5);
            }
            ctx.closePath();

            ctx.fillStyle = `rgba(255, 223, 0, ${opacity})`; // Golden stars
            ctx.fill();
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;
                particle.opacity -= particle.fade;
                particle.angle += particle.spin;

                drawStar(particle);

                // Remove particles that have faded completely
                if (particle.opacity <= 0) {
                    particles.splice(i, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const now = Date.now();

            // Throttle star creation to once every 100ms
            if (now - lastStarCreationTime.current > 40) {
                createStar(e.clientX, e.clientY);
                lastStarCreationTime.current = now;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        // Resize canvas on window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default StarEffect;
