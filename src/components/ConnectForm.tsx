import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ConnectForm.css";

gsap.registerPlugin(ScrollTrigger);

const ConnectForm = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (formRef.current) {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:rithvikbirwaz@gmail.com?subject=${encodeURIComponent(
            formData.subject || "Portfolio Enquiry"
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.open(mailtoLink, "_self");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div
            className="connect-section section-container"
            id="connect"
            ref={sectionRef}
        >
            <div className="connect-container">
                <div className="connect-header">
                    <h2>
                        Let's <span>Connect</span>
                    </h2>
                    <p className="connect-subtitle">
                        Have a project idea, collaboration opportunity, or just want to say
                        hello? Drop me a message below.
                    </p>
                </div>

                <form
                    className="connect-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="connect-name">Name</label>
                            <input
                                type="text"
                                id="connect-name"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                data-cursor="disable"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="connect-email">Email</label>
                            <input
                                type="email"
                                id="connect-email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                data-cursor="disable"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="connect-subject">Subject</label>
                        <input
                            type="text"
                            id="connect-subject"
                            name="subject"
                            placeholder="What's this about?"
                            value={formData.subject}
                            onChange={handleChange}
                            data-cursor="disable"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="connect-message">Message</label>
                        <textarea
                            id="connect-message"
                            name="message"
                            placeholder="Tell me about your project or inquiry..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            data-cursor="disable"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`connect-submit ${submitted ? "submitted" : ""}`}
                        data-cursor="disable"
                    >
                        <span className="btn-text">
                            {submitted ? "Message Sent! ✓" : "Send Message"}
                        </span>
                        <span className="btn-glow"></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConnectForm;
