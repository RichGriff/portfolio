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
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="text-lg text-white font-semibold hover:cursor-pointer"
      >
        {title}
        <span className="ml-2">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="mt-2 text-white">{children}</div>}
    </div>
  );
}