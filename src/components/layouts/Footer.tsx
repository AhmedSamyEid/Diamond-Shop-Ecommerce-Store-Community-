import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity } from "react-icons/fa";

import { useState } from "react";
type Email = {
  email: string;
};

export default function EmailForm() {
  const [emailList, setEmailList] = useState<Email[]>(
    JSON.parse(localStorage.getItem("email") || "[]")
  );

  const [formInputs, setFormInputs] = useState<Email>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
      ...formInputs,
      email: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const alreadyExists = emailList.some(
      (item) => item.email.toLowerCase() === formInputs.email.toLowerCase()
    );
    if (alreadyExists) {
      alert("⚠️ البريد الإلكتروني موجود بالفعل.");
      return;
    }

    const updatedList = [...emailList, formInputs];
    setEmailList(updatedList);
    localStorage.setItem("email", JSON.stringify(updatedList));

    setFormInputs({ email: "" });

    alert("✅ تم حفظ البريد الإلكتروني.");
  };

  return (
    <>
      <footer>
        <div className="container flex items-center flex-wrap gap-5  justify-around border-b-2 border-amber-100 w-full">
          <div>
            <img src="/images/logo.png" />
            <div className="space-y-2 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" /> diamond@shop.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-green-500" /> 92-201-200-30
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" /> Northen Street 24
              </p>
              <p className="flex items-center gap-3">
                <FaCity className="text-purple-500" /> Seattle 200-1220
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-medium">Contact With Us</h1>
            <br />
            <form onSubmit={handleLogin} className="">
              <input
                type="email"
                value={formInputs.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-[250px] p-2 border-2 border-neutral-400 rounded-full"
                required
              />
              <br />
              <button
                type="submit"
                className="w-[250px] mt-4 p-2 cursor-pointer text-2xl rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold"
              >
                Send
              </button>
            </form>
            <br />
          </div>
        </div>
        <span className="flex justify-center mt-4">
          Diamond @Copyright 2025
        </span>
      </footer>
    </>
  );
}
