"use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

// export default function Contact() {
//     const { ref } = useSectionInView("Contact");

//     return (
//         <motion.section
//             id="contact"
//             ref={ref}
//             className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-36"
//             initial={{
//                 opacity: 0,
//             }}
//             whileInView={{
//                 opacity: 1,
//             }}
//             transition={{
//                 duration: 1,
//             }}
//             viewport={{
//                 once: true,
//             }}
//         >
//             <SectionHeading>Contact me</SectionHeading>

//             <p className="text-gray-700 -mt-6 dark:text-white/80">
//                 Please contact me directly at{" "}
//                 <a className="underline" href="mailto:saurabhparyani64@gmail.com">
//                     saurabhparyani64@gmail.com
//                 </a>{" "}
//                 or through this form.
//             </p>


//             <form
//                 action={async (formData) => {
//                     const { data, error } = await sendEmail(formData);

//                     if (error) {
//                         toast.error(error);
//                         return;
//                     }

//                     toast.success("Email sent successfully!");
//                 }}
//             >
//                 <div className="mt-10 flex flex-col dark:text-black">
//                     <input
//                         className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//                         name="senderEmail"
//                         type="email"
//                         required
//                         maxLength={500}
//                         placeholder="Your email"
//                     />
//                     <textarea
//                         className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//                         name="message"
//                         placeholder="Your message"
//                         required
//                         maxLength={5000}
//                     />
//                     <SubmitBtn />

//                 </div>
//             </form>
//         </motion.section >
//     );
// }

import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const sendEmail = (e: any) => {
        e.preventDefault();
        setSuccess("")
        if (!email) {
            setError("Please enter your email");
            return;
        }
        if (!message) {
            setError("Please enter your message");
            return;
        }
        const templateParams = {
            from_name: email,
            to_name: "Saurabh Paryani",
            message
        }
        setError("");
        setIsLoading(true);
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
            )
            .then
            ((response) => {
                console.log("Email sent successfully", response)
                setEmail("");
                setMessage("");
                setIsLoading(false);
                setSuccess("Your message has been sent successfully. I shall get back to you soon. Thank you!")
            })
            .catch((error) => {
                setError("Some error occured. Try sending me a direct email instead.")
                console.error("Error sending mail", error);
                setIsLoading(false);
            })
    }

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-36"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                <Link className="underline" href="mailto:saurabhparyani64@gmail.com">
                    saurabhparyani64@gmail.com
                </Link>{" "}
                or through this form.
            </p>

            <form onSubmit={sendEmail}>
                <div className="mt-10 flex flex-col dark:text-black">
                    <input
                        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="senderEmail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        maxLength={500}
                        placeholder="Your email"
                    />
                    <textarea
                        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                        maxLength={5000}
                    />

                    {error && <div className="p-2 w-full text-center text-red-600 dark:text-red-500 text-sm">{error}</div>}
                    {success && <div className="p-2 w-full text-center text-green-600 dark:text-green-500 text-sm">{success}</div>}
                    <button
                        type="submit"
                        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                        ) : success ? (
                            "Sent!"
                        ) : (
                            <>
                                Submit{" "}
                                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                            </>
                        )}
                    </button>
                </div>
            </form>

        </motion.section >
    )

}