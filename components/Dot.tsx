import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";

export default function Dot({ state }: Readonly<{ state: number }>) {
  const { invalidate } = useThree();
  const ref = useRef<Mesh>();

  useEffect(() => {
    if (ref.current) {
      ref.current.position.x = state * 100;
      ref.current.position.y = state * 100;
      invalidate();
    }
  }, [invalidate, state]);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[50, 30, 30]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
