"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import emailjs from '@emailjs/browser'


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    // const [isLoading, setIsLoading] = useState(false)

    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("")

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }
    const templateParams = {
        from_name: senderEmail,
        to_name: "Saurabh Paryani",
        message
    }

    let data;
    try {
        data = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        );
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};