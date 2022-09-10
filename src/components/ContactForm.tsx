import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../styles/contactForm.module.css";
import { FiArrowUpRight } from "react-icons/fi";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className='min-h-screen text-neutral-dark-200 py-48 font-switzer overflow-hidden'>
      <div
        className={`relative w-[90%] h-[90%] mx-auto bg-neutral-light-100 shadow-xl rounded-xl py-12 px-10 sm:px-16 md:py-16 md:px-24 lg:py-24 lg:px-44 overflow-hidden' ${styles["bg-grid"]}`}
      >
        <motion.div
          className='overflow-hidden absolute top-0 right-0 rounded-xl'
          animate={{ opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 6,
            type: "spring",
            repeat: Infinity,
          }}
        >
          <img
            src='/static/images/tr-ball.webp'
            className=''
            alt='blurred ball'
            width={4000}
          />
        </motion.div>
        <div
          className='flex flex-col gap-4 text-3xl sm:text-4xl md:text-6xl font-semibold mb-12'
          id='contact-header '
        >
          <h3 className='z-10'>I'd love to hear from you.</h3>
          <h3 className='z-10'>Get in touch. 👋</h3>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validate={(values) => {
            const errors: { name: string; email: string; message: string } = {
              name: "",
              email: "",
              message: "",
            };
            if (!values.email) {
              errors.email = "Email is required.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.name) {
              errors.name = "Name is required.";
            }
            if (!values.message) {
              errors.message = "Message is required.";
            }
            return errors.name === "" &&
              errors.email === "" &&
              errors.message === ""
              ? {}
              : errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("SUBMITTING");
            const res = await toast.promise(
              fetch("/api/mail", {
                body: JSON.stringify({
                  email: values.email,
                  name: values.name,
                  message: values.message,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
              }),
              {
                pending: "Sending...",
                success: "Message sent!",
                error: "Error sending message.",
              }
            );
            setSubmitting(true);
            setSubmitted(true);
            console.log("SUBMITTED");
          }}
        >
          {({ isSubmitting }) => (
            <Form className='mt-8 mb-16'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-24'>
                <div className='relative z-10'>
                  <Field
                    type='name'
                    name='name'
                    className='block py-2 px-0 w-full text-sm text-neutral-dark-300 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-200 peer focus:bg-slate-100'
                    placeholder=' '
                  />
                  <label className='absolute text-sm text-slate-400 duration-[150ms] transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
                    Name
                  </label>
                  <div className='text-xs text-red-600 uppercase tracking-wider my-2'>
                    <ErrorMessage name='name' component='p' />
                  </div>
                </div>
                <div className='relative z-10'>
                  <Field
                    type='email'
                    name='email'
                    className='block py-2 px-0 w-full text-sm text-neutral-dark-300 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-200 peer focus:bg-slate-100'
                    placeholder=' '
                  />
                  <label className='absolute text-sm text-slate-400 duration-[150ms] transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
                    Email
                  </label>
                  <div className='text-xs text-red-600 uppercase tracking-wider my-2'>
                    <ErrorMessage name='email' component='p' />
                  </div>
                </div>
              </div>

              <div className='relative z-10 my-4'>
                <Field
                  type='message'
                  name='message'
                  as='textarea'
                  rows={5}
                  className='block py-2 px-0 w-full text-sm text-neutral-dark-300 bg-transparent border-0 border-b-2 border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-200 peer focus:bg-slate-100 resize-none'
                  placeholder=' '
                />
                <label className='absolute text-sm text-slate-400 duration-[150ms] transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7'>
                  Message
                </label>
                <div className='text-xs text-red-600 uppercase tracking-wider my-2'>
                  <ErrorMessage name='message' component='p' />
                </div>
              </div>

              <button
                type='submit'
                disabled={isSubmitting || submitted}
                className='absolute bg-primary-200 hover:bg-primary-100 py-3 px-6 rounded-xl text-neutral-light-200 transition-all z-10 flex flex-row gap-2 items-center mt-6 disabled:cursor-not-allowed disabled:bg-red-500 disabled:hover:bg-red-500'
              >
                Send Message <FiArrowUpRight />
              </button>
            </Form>
          )}
        </Formik>
        <div className='from-transparent to-neutral-light-100 bg-gradient-to-b absolute w-full h-full top-0 left-0 z-0 rounded-lg'></div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};
