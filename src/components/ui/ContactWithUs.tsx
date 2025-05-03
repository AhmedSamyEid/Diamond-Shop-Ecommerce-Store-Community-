import React, { useState } from "react";

export default function ContactFormWithBackground() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData));
    setFormData({ name: "", email: "", message: "" });
    alert("تم حفظ البيانات في LocalStorage!");
  };

  return (
    <div className="max-w-full mx-auto mt-30  text-center">
      <h2 className="text-3xl md:text-4xl  mb-4">Contact With Us</h2>
      <div className="mx-auto  my-2 w-55 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
    <div
      className="relative w-full min-h-screen bg-cover mt-7   bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Rectangle 13 (16).png')", 
      }}
    >
    

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-lg w-full  backdrop-blur-md p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact us
        </h2>

        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded"
          rows={4}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded"
        >
        Send
        </button>
      </form>
    </div>
    </div>
  );
}
