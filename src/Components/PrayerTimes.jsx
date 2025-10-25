import React, { useEffect, useState } from "react";
import { FaHourglassStart } from "react-icons/fa6";
export default function PrayerTimes() {
    const [activePrayer, setActivePrayer] = useState("");
    const [remaining, setRemaining] = useState("");
    // ✅ KPK (Abbottabad) Approximate Start/End times
    const prayerSchedule = [
        { name: "Fajr", start: "05:10 AM", end: "06:00 AM" },
        { name: "Dhuhr", start: "12:05 PM", end: "03:45 PM" },
        { name: "Asr", start: "03:45 PM", end: "05:33 PM" },
        { name: "Maghrib", start: "05:33 PM", end: "07:00 PM" },
        { name: "Isha", start: "07:00 PM", end: "05:10 AM" },
    ];
    // convert 12-hour format to minutes since midnight
    const toMinutes = (time) => {
        const [t, meridiem] = time.split(" ");
        let [h, m] = t.split(":").map(Number);
        if (meridiem === "PM" && h !== 12) h += 12;
        if (meridiem === "AM" && h === 12) h = 0;
        return h * 60 + m;
    };
    useEffect(() => {
        const update = () => {
            const now = new Date();
            const currentMinutes = now.getHours() * 60 + now.getMinutes();
            let active = null;
            for (let i = 0; i < prayerSchedule.length; i++) {
                const start = toMinutes(prayerSchedule[i].start);
                let end = toMinutes(prayerSchedule[i].end);

                // handle Isha → Fajr crossover (after midnight)
                if (end < start) end += 24 * 60;

                let current = currentMinutes;
                if (i === prayerSchedule.length - 1 && current < start) current += 24 * 60;

                if (current >= start && current < end) {
                    active = prayerSchedule[i];
                    const diff = end - current;
                    const hrs = Math.floor(diff / 60);
                    const mins = diff % 60;
                    const secs = 59 - now.getSeconds();
                    setRemaining(
                        `${hrs.toString().padStart(2, "0")}h : ${mins
                            .toString()
                            .padStart(2, "0")}m : ${secs.toString().padStart(2, "0")}s`
                    );
                    break;
                }
            }

            setActivePrayer(active ? active.name : "");
        };

        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", }}   >
            {prayerSchedule.map(({ name, start, end }) => (
                <div key={name} style={{
                    flex: "1 1 150px",
                    background: activePrayer === name ? "#fff" : "#DB9933",
                    color: activePrayer === name ? "#DB9933" : "#fff",
                    border: activePrayer === name ? "5px solid #DB9933" : "5px solid #ffffffff",
                    borderRadius: "10px",
                    padding: "15px 10px",
                    textAlign: "center",
                    boxShadow:
                        activePrayer === name
                            ? "0 5px 15px rgba(10,125,90,0.4)"
                            : "0 2px 6px rgba(0,0,0,0.1)",
                    transform: activePrayer === name ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                }}  >
                    <FaHourglassStart />
                    <h1>{name}</h1>
                    <p className="lead">🕓 {start} → {end} </p>
                    {activePrayer === name && (
                        <p> ⏳ Time left: {remaining}  </p>
                    )}
                </div>
            ))}
        </div>
    );
}
