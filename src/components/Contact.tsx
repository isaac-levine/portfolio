"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      }),
    });

    if (response.ok) {
      setStatus("Email sent successfully");
      setFormData(defaultFormState);
    } else {
      setStatus("Failed to send email");
    }
  };

  const inputClasses =
    "focus:outline-none focus:ring-2 px-2 py-2 rounded-md text-sm w-full";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className={inputClasses}
          style={{
            backgroundColor: "var(--input-bg)",
            color: "var(--text-primary)",
            boxShadow: "0 0 0 2px transparent",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 0 2px var(--input-focus-ring)`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 2px transparent")
          }
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className={inputClasses}
          style={{
            backgroundColor: "var(--input-bg)",
            color: "var(--text-primary)",
            boxShadow: "0 0 0 2px transparent",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 0 2px var(--input-focus-ring)`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 2px transparent")
          }
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`${inputClasses} mt-4`}
          style={{
            backgroundColor: "var(--input-bg)",
            color: "var(--text-primary)",
            boxShadow: "0 0 0 2px transparent",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 0 2px var(--input-focus-ring)`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 2px transparent")
          }
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 rounded-md font-bold"
        style={{
          backgroundColor: "var(--button-bg)",
          color: "var(--button-text)",
        }}
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
