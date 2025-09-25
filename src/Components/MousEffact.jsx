// import React, { useEffect, useRef } from 'react';
// const MousEffact = () => {
//     const canvasRef = useRef(null);
//     const particles = [];
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         const colors = ['#f94144', '#f3722c', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
//         class Particle {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//                 this.size = Math.random() * 10 + 5;
//                 this.color = colors[Math.floor(Math.random() * colors.length)];
//                 this.speedX = Math.random() * 3 - 1.5;
//                 this.speedY = Math.random() * 3 - 1.5;
//             }
//             update() {
//                 this.x += this.speedX;
//                 this.y += this.speedY;
//                 this.size *= 0.95; // Shrink over time
//             }
//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//                 ctx.fillStyle = this.color;
//                 ctx.fill();
//             }
//         }
//         const handleMouseMove = (e) => {
//             for (let i = 0; i < 5; i++) {
//                 particles.push(new Particle(e.clientX, e.clientY));
//             }
//         };
//         const animate = () => {
//             ctx.globalCompositeOperation = 'destination-out';
//             ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//             ctx.globalCompositeOperation = 'lighter';
//             particles.forEach((particle, index) => {
//                 particle.update();
//                 particle.draw();
//                 if (particle.size < 0.5) {
//                     particles.splice(index, 1);
//                 }
//             });
//             requestAnimationFrame(animate);
//         };
//         window.addEventListener('mousemove', handleMouseMove);
//         animate();
//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);
//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 zIndex: 9999,
//                 pointerEvents: 'none',
//             }}
//         />
//     );
// };
// export default MousEffact;








// import React, { useEffect, useRef } from "react";

// const MousEffact = () => {
//     const canvasRef = useRef(null);
//     const mouse = { x: null, y: null };

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const drawHalo = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             if (mouse.x && mouse.y) {
//                 ctx.beginPath();
//                 ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2); // outer circle
//                 ctx.strokeStyle = "rgba(255, 215, 0, 0.8)"; // golden border
//                 ctx.lineWidth = 3;
//                 ctx.shadowBlur = 20;
//                 ctx.shadowColor = "gold";
//                 ctx.stroke();

//                 ctx.beginPath();
//                 ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2); // inner small circle
//                 ctx.fillStyle = "rgba(255,255,255,0.9)";
//                 ctx.fill();
//             }

//             requestAnimationFrame(drawHalo);
//         };

//         const handleMouseMove = (e) => {
//             mouse.x = e.clientX;
//             mouse.y = e.clientY;
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         drawHalo();

//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 zIndex: 9999,
//                 pointerEvents: "none",
//             }}
//         />
//     );
// };

// export default MousEffact;






// import React, { useEffect, useRef } from "react";

// const MousEffact = () => {
//     const canvasRef = useRef(null);
//     const ripples = [];

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         class Ripple {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//                 this.radius = 0;
//                 this.opacity = 1;
//             }
//             update() {
//                 this.radius += 2;      // wave expand hoti rahegi
//                 this.opacity -= 0.02;  // dheere dheere fade out
//             }
//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.strokeStyle = `rgba(0, 150, 255, ${this.opacity})`; // blue water wave
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             }
//         }

//         const handleClick = (e) => {
//             ripples.push(new Ripple(e.clientX, e.clientY));
//         };

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             ripples.forEach((r, index) => {
//                 r.update();
//                 r.draw();
//                 if (r.opacity <= 0) {
//                     ripples.splice(index, 1); // remove faded ripple
//                 }
//             });

//             requestAnimationFrame(animate);
//         };

//         window.addEventListener("click", handleClick);
//         animate();

//         return () => {
//             window.removeEventListener("click", handleClick);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 zIndex: 9999,
//                 pointerEvents: "none",
//             }}
//         />
//     );
// };
// export default MousEffact;












// import React, { useEffect, useRef } from "react";
// const MousEffact = () => {
//     const canvasRef = useRef(null);
//     const ripples = [];
//     const mouse = { x: null, y: null };
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext("2d");
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         class Ripple {
//             constructor(x, y) {
//                 this.x = x;
//                 this.y = y;
//                 this.radius = 0;
//                 this.opacity = 0.6;
//             }
//             update() {
//                 this.radius += 1.5;      // ripple expand
//                 this.opacity -= 0.01;    // fade out
//             }
//             draw() {
//                 ctx.beginPath();
//                 ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//                 ctx.strokeStyle = `rgba(219, 153, 51, ${this.opacity})`; // blue water wave
//                 ctx.lineWidth = 2;
//                 ctx.stroke();
//             }
//         }
//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             ripples.forEach((r, i) => {
//                 r.update();
//                 r.draw();
//                 if (r.opacity <= 0) {
//                     ripples.splice(i, 1);
//                 }
//             });
//             requestAnimationFrame(animate);
//         };
//         // Mouse position track karo
//         const handleMouseMove = (e) => {
//             mouse.x = e.clientX;
//             mouse.y = e.clientY;

//             // Har move par ripple add
//             ripples.push(new Ripple(mouse.x, mouse.y));
//         };
//         window.addEventListener("mousemove", handleMouseMove);
//         animate();
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);
//     return (
//         <canvas
//             ref={canvasRef}
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 zIndex: 0,
//                 pointerEvents: "none",
//             }}
//         />
//     );
// };
// export default MousEffact;




















import React, { useEffect, useRef } from "react";
const MousEffact = () => {
    const canvasRef = useRef(null);
    const ripples = [];
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        class Ripple {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 0;
                this.opacity = 0.6;
            }
            update() {
                this.radius += 2;      // tez expand
                this.opacity -= 0.01;  // dheere fade out
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(219, 153, 51, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ripples.forEach((r, i) => {
                r.update();
                r.draw();
                if (r.opacity <= 0) {
                    ripples.splice(i, 1);
                }
            });
            requestAnimationFrame(animate);
        };
        // 🔹 Mouse move par ripple
        const handleMouseMove = (e) => {
            ripples.push(new Ripple(e.clientX, e.clientY));
        };
        // 🔹 Click par bhi ripple
        const handleClick = (e) => {
            ripples.push(new Ripple(e.clientX, e.clientY));
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        animate();
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};
export default MousEffact;