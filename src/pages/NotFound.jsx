import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-zinc-900 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-xl">Page Not Found</p>
      <Link to="/" className="mt-4 underline">
        Go Back Home
      </Link>
    </div>
  );
}
