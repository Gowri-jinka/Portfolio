import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef(null);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )

      .then(() => {

        alert("Message Sent Successfully ✅");

        form.current.reset();

      })

      .catch((error) => {

        console.log("EMAIL ERROR:", error);

        alert(
          `Failed ❌ ${error?.text || error?.message}`
        );

      });

  };

  return (

<section
id="contact"
className="py-24 px-6"
>

<div
className="
max-w-5xl
mx-auto
bg-[#0f172a]
rounded-3xl
p-12
shadow-[0_0_40px_rgba(0,255,255,.08)]
"
>

<h2
className="
text-5xl
font-bold
text-cyan-400
text-center
mb-14
"
>

Contact Me

</h2>

<form
ref={form}
onSubmit={sendEmail}
className="
max-w-3xl
mx-auto
space-y-8
"
>

<input
type="text"
name="user_name"
placeholder="Your Name"
required
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