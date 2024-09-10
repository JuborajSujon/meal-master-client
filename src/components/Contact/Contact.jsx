import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle/SectionTitle";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_olo2pso", "template_bsy88ux", form.current, {
        publicKey: "aRuqCFhaPTQVej7Hl",
      })
      .then(
        () => {
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="dark:bg-slate-800 my-12">
      <div>
        {/* =========== TITLE =========== */}
        <SectionTitle title="Contact" subTitle="Get in touch" />

        {/* =========== DESCCRIPTION =========== */}
        <p className="mt-2 ml-4 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light mb-6">
          Reach out to us and we will get back to you as soon as possible.
        </p>
      </div>
      <Element name="contact" id="contact">
        <section id="contact" className="shadow-md ml-4 p-6">
          {/* =========== FORM =========== */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              noValidate=""
              className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Leroy Jenkins"
                  className="block w-full rounded p-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-amber-600 bg-gray-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="leroy@jenkins.com"
                  className="block w-full rounded p-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-amber-600 bg-gray-100"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  name="message"
                  className="block w-full rounded p-2 focus:ring focus:ring-opacity-75 focus:ring-amber-600 bg-gray-100"></textarea>
              </label>
              <input
                type="submit"
                value="Send"
                className="self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-orange-500 text-gray-50 focus:ring-orange-500 hover:ring-orange-500"
              />
            </form>
          </div>
        </section>
      </Element>
    </div>
  );
}

export default Contact;
