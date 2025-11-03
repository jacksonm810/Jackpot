import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const ThreeJsCoin = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial
        color="#9b87f5"
        metalness={0.8}
        roughness={0.2}
        emissive="#7c5dfa"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export default ThreeJsCoin;
