"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const regex = /^(98|97)\d{8}$/; // Starts with 98 or 97, total 10 digits
    return regex.test(value);
  };

  const onSubmit = () => {
    if (!validatePhone(id)) {
      setError("Phone number must be 10 digits and start with 98 or 97");
      return;
    }

    setError("");
    router.push(`/users/${id}`); // Redirect to the dynamic user page
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setError(""); // Clear error while typing
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-lg">
        <h1 className="text-3xl text-center mb-6">Register Here</h1>
        <input
          type="text"
          id="phone"
          value={id}
          onChange={handleChange}
          placeholder="Enter phone number"
          maxLength={10}
          className="border-2 border-gray-300 p-3 rounded-lg w-full mb-2"
        />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button
          onClick={onSubmit}
          className="bg-teal-500 text-white w-full p-3 rounded-lg hover:bg-teal-600 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
