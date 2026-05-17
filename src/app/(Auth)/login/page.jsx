"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-6">
      <div className="w-full max-w-md bg-white border shadow-sm rounded-2xl p-8">
        <h1 className="text-3xl font-light text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 text-sm mt-2 mb-8">
          Login to continue your journey
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:border-cyan-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-3 rounded-xl outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl cursor-pointer transition"
          >
            Login
          </button>

          <Button className="w-full" variant="tertiary">
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-cyan-500 cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
