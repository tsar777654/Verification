import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function iPhone17ProGiveaway() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">iPhone 17 Pro Giveaway</h1>
      {!submitted ? (
        <button onClick={() => setSubmitted(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Enter Now
        </button>
      ) : (
        <p className="text-green-600 font-semibold">You're entered! 🎉</p>
      )}
      <img src={process.env.PUBLIC_URL + "/images/iphone17pro.png"} alt="iPhone 17 Pro" className="mt-6 w-80 rounded-xl shadow-lg"/>
    </div>
  );
}