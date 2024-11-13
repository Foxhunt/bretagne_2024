"use client";

import Scene from "@/components/Scene";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(0);

  return (
    <main className="h-screen">
      <Scene state={state} />
      <input
        type="range"
        min="0"
        max="1"
        step={0.001}
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
        className="w-full"
      />
    </main>
  );
}
