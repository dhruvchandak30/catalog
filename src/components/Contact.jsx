import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("pfxuLjFyyfCcWJnZn"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_mkbnvv4";
    const templateId = "template_jxm4is9";
    const name = nameRef.current.value;
    const recipient = emailRef.current.value;
    const message = messageRef.current.value;
    if (name === "" || recipient === "" || message === "") {
      alert("Please Fill all Boxes");
      return;
    }
    if (!recipient.includes("@gmail.com")) {
      alert("Enter Valid Gmail Address");
      return;
    }
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
        message: messageRef.current.value,
      });
      alert("Email Sent Successfully, Team will contact you Soon");
    } catch (error) {
      alert("Failed, Try Again Later");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="flex flex-col gap-4 m-8  justify-center items-center align-middle">
      <form
        className="for flex flex-col gap-3 border-2 border-black p-8  rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="form_group flex  flex-row gap-2 justify-between">
          <label className="lg:text-xl" htmlFor="">
            Name
          </label>
          <input
            className="border-2 px-2 border-black rounded-md"
            ref={nameRef}
            placeholder="Name"
          />
        </div>
        <div className="form_group flex  flex-row gap-2 justify-between">
          <label className="lg:text-xl" htmlFor="">
            Gmail
          </label>
          <input
            className="border-2 px-2 lg:w-full  border-black rounded-md"
            ref={emailRef}
            type="email"
            placeholder="Your Gmail"
          />
        </div>
        <div className="form_group flex  flex-row gap-2 justify-between">
          <label className="lg:text-xl" htmlFor="">
            Message
          </label>
          <input
            className="border-2 px-2 border-black rounded-md"
            ref={messageRef}
            type="text"
            placeholder="Message"
          />
        </div>
        <button
          className="btn bg-[#F1F5A8] text-black border-1 border-black text-xl font-semibold"
          disabled={loading}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
export default Contact;
