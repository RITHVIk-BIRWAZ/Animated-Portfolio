import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certificates.css";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "AWS Academy — Generative AI Foundations",
        issuer: "Amazon Web Services",
        date: "Feb 2026",
        icon: "🤖",
        color: "#ff9900",
    },
    {
        title: "Deloitte — Data Analytics Job Simulation",
        issuer: "Forage",
        date: "Feb 2026",
        icon: "📊",
        color: "#86bc25",
    },
    {
        title: "Tata — Cybersecurity Analyst Simulation",
        issuer: "Forage",
        date: "Feb 2026",
        icon: "🛡️",
        color: "#0070c0",
    },
    {
        title: "AINNOVATION 2025 — Microsoft AI Learning",
        issuer: "Microsoft",
        date: "2025",
        icon: "🧠",
        color: "#00a4ef",
    },
    {
        title: "AINNOVATION 2025 — Azure Learning Challenge",
        issuer: "Microsoft",
        date: "2025",
        icon: "☁️",
        color: "#0078d4",
    },
];

const Certificates = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    rotateX: 15,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === sectionRef.current) {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <div
            className="certificates-section section-container"
            id="certificates"
            ref={sectionRef}
        >
            <div className="certificates-container">
                <h2>
                    My <span>Certificates</span>
                </h2>
                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div
                            className="cert-card"
                            key={index}
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            style={
                                {
                                    "--cert-color": cert.color,
                                } as React.CSSProperties
                            }
                        >
                            <div className="cert-glow"></div>
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-content">
                                <h4>{cert.title}</h4>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">{cert.date}</p>
                            </div>
                            <div className="cert-shine"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
