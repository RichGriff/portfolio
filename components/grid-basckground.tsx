import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="h-[36rem] absolute top-0 left-0 -z-10 w-full bg-background dark:bg-dot-white/[0.1] bg-dot-black/[0.2] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
    </div>
  );
}
