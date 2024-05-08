import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isLoading, setIsLoading] = useState();
  const {alert, showAlert, hideAlert}=useAlert();
  const formRef = useRef();
  const handleCange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          your_name: form.name,
          to_name: "Velizar",
          your_email: form.email,
          to_email: "velizardabov@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {

        setIsLoading(false);
     showAlert({show:true, text:'Message send successfully!', type:'sucess'})
        setTimeout(()=> {
          hideAlert(false);
setCurrentAnimation('idle');
setForm({ name: "", email: "", message: "" });
        }, [3000])
      })
      .catch((error) => {
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({show:true, text:'I didnt receive your message', type:'danger'})
        setIsLoading(false);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <lable className="text-black-500 font-semibold">
            Name
            <input
              className="input"
              type="text"
              required
              placeholder="John"
              name="name"
              value={form.name}
              onChange={handleCange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </lable>
          <lable className="text-black-500 font-semibold">
            Email
            <input
              className="input"
              type="text"
              required
              placeholder="john@email.com"
              name="email"
              value={form.email}
              onChange={handleCange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </lable>
          <lable className="text-black-500 font-semibold">
            Your Message
            <textarea
              className="input"
              type="text"
              required
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={handleCange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </lable>
          <button
            className="btn"
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />

            <Fox
            currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.625, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
