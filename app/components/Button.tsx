import React from "react";

interface buttonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: buttonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
