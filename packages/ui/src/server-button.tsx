import React from "react";

interface ServerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ServerButton({
  children,
  className = "",
  ...props
}: ServerButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
