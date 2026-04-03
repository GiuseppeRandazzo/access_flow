"use client";

import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { className = "", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

export default Input;
