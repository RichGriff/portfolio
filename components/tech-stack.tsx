'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton';

// Define types for stack keys
type StackType = 'mongo' | 'react' | 'nextjs' | 'nodejs' | 'docker' | 'javascript' | 'redux' | 'tailwindcss' | 'typescript' | 'prisma';

// Define image mappings for light and dark themes
const logoImages: Record<StackType, { light: string, dark: string }> = {
  mongo: { light: '/images/logos/mongo-light.svg', dark: '/images/logos/mongo-dark.svg' },
  react: { light: '/images/logos/react-light.svg', dark: '/images/logos/react-dark.svg' },
  nextjs: { light: '/images/logos/nextjs-light.svg', dark: '/images/logos/nextjs-dark.svg' },
  nodejs: { light: '/images/logos/nodejs-light.svg', dark: '/images/logos/nodejs-dark.svg' },
  docker: { light: '/images/logos/docker-light.svg', dark: '/images/logos/docker-dark.svg' },
  javascript: { light: '/images/logos/javascript-light.svg', dark: '/images/logos/javascript-dark.svg' },
  redux: { light: '/images/logos/redux-light.svg', dark: '/images/logos/redux-dark.svg' },
  tailwindcss: { light: '/images/logos/tailwindcss-light.svg', dark: '/images/logos/tailwindcss-dark.svg' },
  typescript: { light: '/images/logos/typescript-light.svg', dark: '/images/logos/typescript-dark.svg' },
  prisma: { light: '/images/logos/prisma-light.svg', dark: '/images/logos/prisma-dark.svg' },
};

const TechStackItem = ({ stack } : { stack: string }) => {
  const { theme, resolvedTheme } = useTheme(); // Get the current theme
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (theme || resolvedTheme) {
      setCurrentTheme(theme || resolvedTheme);
    }
  }, [theme, resolvedTheme]);

  if (!currentTheme) {
    // Render a placeholder or loader while the theme is being determined
    return <Skeleton className="w-6 h-6 rounded-lg" />;
  }

  const { light, dark } = logoImages[stack as StackType];
  const logoSrc = resolvedTheme === 'dark' ? dark : light;

  return (
    <Image
      src={logoSrc}
      alt={stack}
      width={stack === 'mongo' ? 14 : 28}
      height={28}
      className="w-7 h-7"
    />
  )
}

export default TechStackItem
