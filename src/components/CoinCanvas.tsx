import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeJsCoin from "./ThreeJsCoin";

const CoinCanvas = () => {
  return (
    <div className="w-20 h-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c5dfa" />
        <ThreeJsCoin />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CoinCanvas;
