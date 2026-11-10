import React, { useState } from "react";

const openingHours = [
  { day: "Saturday", index: 6, time: "7:00 AM - 4:00 PM" },
  { day: "Sunday", index: 0, time: "Closed" },
  { day: "Monday", index: 1, time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", index: 2, time: "7:00 AM - 5:00 PM" },
  { day: "Wednesday", index: 3, time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", index: 4, time: "7:00 AM - 5:00 PM" },
  { day: "Friday", index: 5, time: "7:00 AM - 5:00 PM" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const today = new Date().getDay(); // 0 = Sunday ... 6 = Saturday

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your backend / email service
    console.log(formData);
  };

  const inputBase =
    "h-[32px] w-full border border-[#dcdcdc] px-2 text-[13px] text-[#333] outline-none focus:border-[#ff1935]";

  return (
    <main className="min-h-screen w-full bg-[#fdfdfd]">
      {/* ================= PAGE TITLE BAR ================= */}
      <div className="w-full border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[925px] items-center justify-between px-4 py-5 sm:px-8 lg:px-0">
          <h1 className="font-serif text-[22px] font-normal text-[#777]">
            Contact
          </h1>
          <p className="text-[11px] text-[#aaa]">
            Home <span className="mx-2">›</span> Contact
          </p>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <section className="mx-auto mt-0 max-w-[925px] px-4 sm:px-8 lg:px-0">
        <iframe
          title="AMCOL Hardware & Home Store location"
          src="https://www.google.com/maps?q=AMCOL+Hardware+%26+Home+Store+22+Ramjohn+Trace+Penal+Trinidad+and+Tobago&output=embed"
          className="h-[260px] w-full border-0 sm:h-[305px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>

      {/* ================= CONTACT INFO ROW ================= */}
      <section className="mt-12 w-full border-b border-[#e5e5e5] pb-10">
        <div className="mx-auto grid max-w-[925px] grid-cols-1 gap-y-6 px-4 sm:grid-cols-3 sm:gap-x-4 sm:px-8 lg:px-0">
          {/* Email */}
          <div className="flex items-start gap-4">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 shrink-0 text-[#e0203a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
              <path d="M3 6.5l9 7 9-7" />
            </svg>
            <div>
              <p className="text-[12px] text-[#777]">Have any questions?</p>
              <a
                href="mailto:info@amcolgroup.com"
                className="mt-1 block text-[13px] font-bold text-[#555] transition-colors hover:text-[#c90020]"
              >
                info@amcolgroup.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 shrink-0 text-[#e0203a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
              <path d="M8.5 10.5h7M8.5 13.5h4" />
            </svg>
            <div>
              <p className="text-[12px] text-[#777]">Call us</p>
              <a
                href="tel:+18683999200"
                className="mt-1 block text-[13px] font-bold text-[#555] transition-colors hover:text-[#c90020]"
              >
                (868) 399-9200
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 shrink-0 text-[#e0203a]"
              fill="currentColor"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            <div>
              <p className="text-[12px] text-[#777]">Address</p>
              <p className="mt-1 text-[13px] font-bold leading-[18px] text-[#555]">
                22 Ramjohn Trace, Penal, Trinidad and Tobago
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WRITE A MESSAGE ================= */}
      <section className="w-full border-b border-[#e5e5e5] bg-[#f9f9f9] py-10">
        <div className="mx-auto grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-6 px-4 sm:px-8 lg:grid-cols-[30%_1fr] lg:px-0">
          {/* Left column */}
          <div className="lg:text-right">
            <h2 className="font-serif text-[24px] font-bold leading-tight text-[#333]">
              Write a message
            </h2>

            <p className="mt-5 text-[12px] leading-[22px] text-[#777]">
              If you have any questions, please do not hesitate to send us a
              message. We reply within{" "}
              <span className="border-b border-dotted border-[#777]">
                24 hours
              </span>{" "}
              !
            </p>

            <p className="mt-4 text-[12px] text-[#777]">
              Our profiles in social medias:
            </p>

            <div className="mt-3 flex gap-2 lg:justify-end">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-[26px] w-[26px] items-center justify-center border border-[#ddd] bg-white text-[#555] transition-colors hover:border-[#ff1935] hover:text-[#ff1935]"
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                  <path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4.5 1.8-4.5 4.4V8H7v3.5h2.5V22H14V11.5h2.8L17.2 8H14z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-[26px] w-[26px] items-center justify-center border border-[#ddd] bg-white text-[#555] transition-colors hover:border-[#ff1935] hover:text-[#ff1935]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column – form */}
          <form onSubmit={handleSubmit} className="min-w-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-[11px] font-bold text-[#555]"
                >
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputBase} bg-[#eee]`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[11px] font-bold text-[#555]"
                >
                  E-mail address:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputBase} bg-white`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-[11px] font-bold text-[#555]"
                >
                  Subject:
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${inputBase} bg-[#eee]`}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1 block text-[11px] font-bold text-[#555]"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[150px] w-full resize-y border border-[#dcdcdc] bg-white p-2 text-[13px] text-[#333] outline-none focus:border-[#ff1935]"
                required
              />
            </div>

            {/* reCAPTCHA placeholder – replace with your real reCAPTCHA component */}
            <div className="mt-4 flex h-[68px] w-full max-w-[300px] items-center justify-between border border-[#d3d3d3] bg-[#f9f9f9] px-3 shadow-[0_0_4px_rgba(0,0,0,0.08)]">
              <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#333]">
                <input type="checkbox" className="h-6 w-6 cursor-pointer" />
                I&apos;m not a robot
              </label>
              <span className="text-[8px] leading-tight text-[#777]">
                reCAPTCHA
              </span>
            </div>

            <button
              type="submit"
              className="mt-4 rounded-[3px] bg-[#e0203a] px-4 py-[9px] text-[12px] font-bold text-white transition-colors hover:bg-[#c90020]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= OPENING HOURS ================= */}
      <section className="w-full pb-16 pt-10">
        <div className="mx-auto grid max-w-[925px] grid-cols-1 gap-x-4 gap-y-6 px-4 sm:px-8 lg:grid-cols-[30%_1fr] lg:px-0">
          <h2 className="font-serif text-[24px] font-bold leading-tight text-[#333] lg:text-right">
            Opening Hours
          </h2>

          <div className="min-w-0 overflow-x-auto">
            <table className="w-full border-collapse text-center text-[12px] text-[#555]">
              <tbody>
                {openingHours.map((item) => {
                  const isToday = item.index === today;
                  return (
                    <tr
                      key={item.day}
                      className={
                        isToday
                          ? "bg-[#b3e8a5] font-bold italic"
                          : "bg-[#f7f7f7]"
                      }
                    >
                      <td className="w-1/2 border border-[#dcdcdc] px-3 py-[10px]">
                        {item.day}
                      </td>
                      <td className="w-1/2 border border-[#dcdcdc] px-3 py-[10px]">
                        {item.time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;