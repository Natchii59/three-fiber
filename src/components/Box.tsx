import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Texture from '../assets/map.jpg';

export default function Box() {
  const colorMap = useLoader(TextureLoader, Texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach='geometry' args={[2, 2, 2]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
