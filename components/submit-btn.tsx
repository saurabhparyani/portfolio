"use client"

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser'
// // @ts-ignore
// import { experimental_useFormStatus as useFormStatus } from "react-dom";


export default function SubmitBtn() {
    // const { pending } = useFormStatus();
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const [isLoading, setIsLoading] = useState(false)

    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("")

    // const sendEmail = () => {
    //     setSuccess("")
    //     if (!email) {
    //         setError("Please enter your email");
    //         return;
    //     }
    //     if (!message) {
    //         setError("Please enter your message");
    //         return;
    //     }
    //     const templateParams = {
    //         from_name: email,
    //         to_name: "Saurabh Paryani",
    //         message
    //     }

    //     setError("");
    //     setIsLoading(true);
    //     emailjs
    //         .send(
    //             process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    //             process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    //             templateParams,
    //             process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    //         )
    //         .then(
    //             function (response) {
    //                 setEmail("");
    //                 setName("");
    //                 setMessage("");
    //                 setIsLoading(false);
    //                 setSuccess("Your message has been sent successfully. I shall get back to you soon. Thank you!")
    //             },
    //             function (error) {
    //                 setError("Some error occured. Try sending me a direct email instead.")
    //                 console.log(error);
    //                 setIsLoading(false);
    //             }
    //         )
    // }
    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        // onClick={sendEmail}
        // disabled={pending}
        >
            {/* {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              ) : ( */}
            <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
            {/* )} */}
        </button>
    )
}