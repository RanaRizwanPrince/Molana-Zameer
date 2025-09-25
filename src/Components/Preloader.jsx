import React, { useEffect, useState } from "react";
const Preloader = ({ children }) => {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showFlowers, setShowFlowers] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        document.body.style.overflow = "hidden";

        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        setShowFlowers(true);
                        document.body.style.overflow = "auto";

                        // 3 seconds ke baad fade out start
                        setTimeout(() => setFadeOut(true), 3000);

                        // fade out ke baad remove flowers
                        setTimeout(() => {
                            setShowFlowers(false);
                            setFadeOut(false);
                        }, 4000); // 1 second fade out duration
                    }, 500);
                    return 100;
                }
            });
        }, 30);
        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, []);
    if (loading) {
        return (
            <div style={styles.loaderWrapper}>
                <div style={styles.circle}>
                    <svg viewBox="0 0 36 36" style={styles.svg}>
                        <path
                            style={styles.bgPath}
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            style={{
                                ...styles.progressPath,
                                strokeDasharray: `${progress}, 100`,
                            }}
                            d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                    <div style={styles.percentage}>{progress}%</div>
                </div>
            </div>
        );
    }
    return (
        <>
            {showFlowers &&
                [...Array(100)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.flower,
                            left: `${Math.random() * 100}%`,
                            fontSize: `${12 + Math.random() * 24}px`,
                            animationDelay: `${Math.random() * 2}s`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            opacity: fadeOut ? 0 : 1,
                            transition: "opacity 1s ease",
                        }}
                    >
                        🌸
                    </div>
                ))}
            {children}
        </>
    );
};
const styles = {
    loaderWrapper: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    circle: {
        position: "relative",
        width: "180px",
        height: "180px",
    },
    svg: {
        transform: "rotate(-90deg)",
        width: "100%",
        height: "100%",
    },
    bgPath: {
        fill: "none",
        stroke: "#eee",
        strokeWidth: 2.8,
    },
    progressPath: {
        fill: "none",
        stroke: "#ff0099",
        strokeWidth: 2.8,
        strokeLinecap: "round",
        transition: "stroke-dasharray 0.3s ease",
    },
    percentage: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "28px",
        fontWeight: "bold",
        color: "#555",
    },
    flower: {
        position: "fixed",
        top: "-50px",
        animation: "fall 3s linear forwards",
        zIndex: 9998,
    },
};
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
    `@keyframes fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(360deg); opacity: 1; }
  }`,
    styleSheet.cssRules.length
);
export default Preloader;