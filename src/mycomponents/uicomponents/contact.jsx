
import { BsStars } from "react-icons/bs";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_development",
      "template_5xurlyi",
      formData,
      "yRN0Bt6xCJbrI0erh"
    )
    .then(() => {
      Swal.fire({
        title: "Message Sent 🚀",
        text: "Thanks! I’ll get back to you soon.",
        icon: "success",
        background: "#0f0f0f",
        color: "#fff",
        confirmButtonColor: "#ffffff",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch(() => {
      Swal.fire({
        title: "Oops ❌",
        text: "Something went wrong. Try again!",
        icon: "error",
        background: "#0f0f0f",
        color: "#fff",
      });
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-30">

      <div className="w-full max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-3 text-center">
          Let’s Build Something Amazing 
        </h1>

        <p className="text-white/60 mb-10 text-center">
          Got a project idea or collaboration in mind? Drop me a message and I’ll get back to you within 24 hours.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            required
          />

          <input
            type="text"
            placeholder="Project Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            required
          />

          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            <BsStars />
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default ContactPage;