import React, { useEffect, useState } from "react";
const TopToBottom = () => {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / windowHeight) * 100;
            setScrollPercent(Math.round(scrolled));
            if (scrolled > 5) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div
                onClick={scrollToTop}
                style={{
                    position: "fixed", bottom: "20px", right: "20px",
                    background: "#DB9933", color: "#fff", padding: "10px 15px",
                    borderRadius: "8px", fontSize: "14px", fontWeight: "bold",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)", zIndex: 9999, cursor: "pointer",
                    transition: "all 0.4s ease-in-out", opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.8)", pointerEvents: visible ? "auto" : "none",
                }}>
                {scrollPercent < 100
                    ? `Scrolled: ${scrollPercent}%`
                    : "✅ You reached the bottom!"}
            </div>
        </>
    );
};
export default TopToBottom;