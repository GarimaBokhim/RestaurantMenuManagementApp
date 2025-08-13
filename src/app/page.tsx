"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const regex = /^(98|97)\d{8}$/;
    return regex.test(value);
  };

  const onSubmit = () => {
    if (!validatePhone(id)) {
      setError("Phone number must be 10 digits and start with 98 or 97");
      return;
    }

    setError("");
    router.push(`/users/id:${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="flex w-full justify-center text-3xl">Register Here</h1>
        <input
          type="text"
          id="phone"
          value={id}
          onChange={handleChange}
          placeholder="Enter phone number"
          maxLength={10}
          className="border-2 border-gray-300 p-3 rounded-lg my-4"
        />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="bg-teal-500 p-2 rounded-lg cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
