'use client'

import { useState } from 'react';

interface CollapsibleProps {
  title: string
  children: React.ReactNode
}

export const Collapsible = ({ title, children } : CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg text-white font-semibold"
      >
        {title}
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2 text-white">{children}</div>}
    </div>
  );
}