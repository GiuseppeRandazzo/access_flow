"use client";

import React from "react";

interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "error" | "success";
}

export const Alert = ({ children, variant = "info" }: AlertProps) => {
  const base = "p-3 rounded-md text-sm";
  const colors =
    variant === "error"
      ? "bg-red-50 text-red-700 border border-red-200"
      : variant === "success"
        ? "bg-green-50 text-green-700 border border-green-200"
        : "bg-blue-50 text-blue-700 border border-blue-200";

  return (
    <div role="alert" className={`${base} ${colors}`} aria-live="polite">
      {children}
    </div>
  );
};

export default Alert;
