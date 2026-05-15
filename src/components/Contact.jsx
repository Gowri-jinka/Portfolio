import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef(null);

    useEffect(() => {
        // Initialize EmailJS with your public key once
        emailjs.init("1MpO0zV2U4OSUhgd4");
        console.log("EmailJS init done");
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        // Prevent accidental double submit
        const submitBtn = e?.submitter;
        if (submitBtn) submitBtn.disabled = true;


        if (!form.current) {
            alert("Form not found ❌");
            if (submitBtn) submitBtn.disabled = false;
            return;
        }

        console.log("EmailJS sendForm payload:", {
            serviceId: "service_42qdj88",
            templateId: "template_ytmqq9e",
            publicKey: "1MpO0zV2U4OSUhgd4",
        });

        // NOTE: If you see `Account not found (404)`, then the Public Key does NOT belong to the
        // EmailJS account that owns the given Service ID + Template ID.

        // Also ensure your EmailJS template variables match these input `name` attributes:
        // - user_name
        // - user_email
        // - message

        const templateParams = {
            user_name: form.current?.user_name?.value,
            user_email: form.current?.user_email?.value,
            message: form.current?.message?.value,
        };

        console.log("EmailJS templateParams (for template variables):", templateParams);

       emailjs.sendForm(
import.meta.env.VITE_SERVICE_ID,
import.meta.env.VITE_TEMPLATE_ID,
form.current,
import.meta.env.VITE_PUBLIC_KEY
)
            .then(
                (result) => {
                    console.log("EmailJS result:", result);
                    alert("Message Sent Successfully ✅");
                    form.current.reset();
                    if (submitBtn) submitBtn.disabled = false;
                },
                (error) => {
                    console.log("EMAIL ERROR:", error);

                    const status = error?.status;
                    const text = error?.text;
                    // Some EmailJS errors also include: error?.message
                    const msg = error?.message;

                    const message = `Failed ❌${status ? ` (status: ${status})` : ""}${text ? `: ${text}` : ""}${msg ? ` | ${msg}` : ""}`;

                    alert(message);
                    if (submitBtn) submitBtn.disabled = false;
                }
            );
    };

    return (
        <section
            id="contact"
            className="py-24 px-6"
        >

            <div className="max-w-5xl mx-auto bg-[#0f172a] rounded-3xl p-12">

                <h2 className="text-5xl font-bold text-cyan-400 text-center mb-14">
                    Contact
                </h2>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-3xl mx-auto space-y-8"
                    autoComplete="off"
                >

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        autoComplete="name"
                        className="
                        w-full
                        p-5
                        rounded-xl
                        bg-[#111827]
                        border
                        border-cyan-500
                        outline-none
                        text-white
                        "
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        autoComplete="email"
                        className="
                        w-full
                        p-5
                        rounded-xl
                        bg-[#111827]
                        border
                        border-cyan-500
                        outline-none
                        text-white
                        "
                    />

                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Your Message"
                        required
                        autoComplete="off"
                        className="
                        w-full
                        p-5
                        rounded-xl
                        bg-[#111827]
                        border
                        border-cyan-500
                        outline-none
                        text-white
                        "
                    ></textarea>

                    <button
                        type="submit"
                        className="
                        w-full
                        bg-cyan-400
                        text-black
                        py-4
                        rounded-xl
                        font-bold
                        text-xl
                        hover:scale-[1.02]
                        transition
                        duration-300
                        "
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
};

export default Contact;
