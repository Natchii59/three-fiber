import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import AnimatedSphere from './components/AnimatedSphere';
import Box from './components/Box';
import Iphone from './components/Iphone';

export default function App() {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Iphone />
      </Canvas>
    </>
  );
}
