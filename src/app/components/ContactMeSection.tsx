"use client";

import GitHubIcon from "./../../../public/github-icon.svg";
import LinkedInIcon from "./../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function EmailMeSection() {
  const [userEmail, setUserEmail] = useState("");
  const [userSubject, setUserSubject] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailFailedToSend, setEmailFailedToSend] = useState(false);

  // const send = async () => {
  const send = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          subject: userSubject,
          message: userMessage,
        }),
      });

      console.log(response);
      if (!response.ok) {
        setEmailFailedToSend(true);

        setTimeout(() => {
          setEmailFailedToSend(false);
        }, 8000);

        throw new Error("Failed to send email");
      }

      if (response.status === 200) {
        console.log("Email Sent");
        setEmailSubmitted(true);
        setUserEmail("");
        setUserSubject("");
        setUserMessage("");

        setTimeout(() => {
          setEmailSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error); // Handle error
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div>
        {/* FUTURE DEVELOPMENT: UPGRADE YOUR FORMS -> https://www.youtube.com/watch?v=t2LvPXHLrek */}
        <h5 className="text-xl font-bold text-heading my-2">Lets Connect</h5>
        <p className="text-pText mb-4 max-w-md">
          {`Hey there! Welcome to my corner of the web! 🌟 I'm thrilled you've
          dropped by. Whether you're here to explore potential collaborations,
          bounce around some ideas, or just share a fun fact or two, I'm all
          ears! Let's connect.`}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/narcelin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GitHubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/narcelin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedInIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <form action="" className="flex flex-col" id="emailForm">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-heading block text-sm font-medium mb-2"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            placeholder="johnDoe@email.com"
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-heading block text-sm font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={userSubject}
            onChange={(e) => setUserSubject(e.target.value)}
            required
            placeholder="Just saying hi"
            // onChange={(e) => setUserSubject(e.target.value)}
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-heading block text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's talk about..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="bg-c3 border border-c2 placeholder-c5 text-pText text-sm rounded-lg w-full block p-2.5"
          />
        </div>
        <button
          type="submit"
          className="text-heading bg-c2 hover:bg-c1 hover:text-c3 front-medium py-2.5 px-5 rounded-lg w-full"
          formAction={send}
        >
          Send Message
        </button>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
        {emailFailedToSend && (
          <p className="text-red-500 text-sm mt-2">
            Error: email not sent. Please contact me directly through one of my
            contact links. Thank You!
          </p>
        )}
      </form>
    </section>
  );
}
