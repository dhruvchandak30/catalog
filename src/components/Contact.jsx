import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar/Navbar";
import "../components/Landing/Design/design.css";
import img1 from "./Landing/Design/Assets/img1.jpg";

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
    <div className="    ">
      <div className="ContactBG text-white">
        <Navbar />
        <div className="flex p-8    lg:flex-row flex-col justify-evenly items-center align-middle  gap-16">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col lg:p-4 lg:pl-4 gap-8 text-left    justify-center"
          >
            <div className=" lg:text-7xl text-4xl font-semibold font-sans">
              Contact Us
            </div>
            <div className="flex text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              adipiscing.
            </div>
          </div>
          <div className="flex   top-64 flex-row items-center lg:w-1/5 gap-4">
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <img
                alt="Kitchen"
                className="img1   rounded-t-full"
                src={img1}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex flex-col text-left text-xl gap-3 m-16 "
      >
        <div className="text-3xl font-sans font-semibold">
          Contact Information
        </div>
        <div className="lg:w-1/2 text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>
        <div className="font-semibold">
          Email: <span className="font-normal">nirguanexports@gmail.com</span>
        </div>
        <div className="font-semibold">
          Phone: <span className="font-normal">958865142</span>
        </div>
        <div className="font-semibold">
          Address:{" "}
          <span className="font-normal">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex lg:flex-row flex-col align-middle items-center justify-center gap-16 AboutBg p-16 my-16"
      >
        <div>
          <div className="text-5xl text-white font-sans text-left my-2">
            Contact Us
          </div>
          <form
            className="for flex flex-col gap-3 border-2 border-black p-8  rounded-xl bg-white"
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
              className="btn text-black border-1 border-black text-xl font-semibold hover:bg-[#4d7169] hover:text-white"
              disabled={loading}
            >
              Send Message
            </button>
          </form>
        </div>
        <div  data-aos="fade-up"
            data-aos-duration="2000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.966118263089!2d75.92091417522523!3d26.93628857663316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1711688375356!5m2!1sen!2sin"
            width="500"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
            className="lg:w-full w-max"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;

{
}
