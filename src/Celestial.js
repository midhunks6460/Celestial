import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Stars } from '@react-three/drei';

const CelestialScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Stars />
    </Canvas>
  );
};

export default CelestialScene;

