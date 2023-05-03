import { useState } from "react";
import Success from "./Success";
import "../tailwind.css";

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  return (
    <section className="bg-white my-44 -mb-10" id="contact">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="text-5xl md:text-6xl mt-44">Contact me</p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>{showSuccessMessage && <Success />}</div>
    </section>
  );
}
