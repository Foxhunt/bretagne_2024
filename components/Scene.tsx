"use client";

import { Canvas } from "@react-three/fiber";
import Dot from "./Dot";

export default function Scene({ state }: Readonly<{ state: number }>) {
  return (
    <Canvas
      orthographic
      frameloop="demand"
      camera={{ near: 0.1, position: [0, 0, 100] }}
    >
      <Dot state={state} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 100]} color="red" />
    </Canvas>
  );
}
