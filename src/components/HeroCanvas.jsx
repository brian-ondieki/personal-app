// frontend/src/components/HeroCanvas.jsx
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, TorusKnot } from '@react-three/drei';

// This is a simple animated 3D object
const AnimatedObject = () => {
  const meshRef = useRef();

  // useFrame allows you to run code on every rendered frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    // TorusKnot is a more interesting shape than a simple box
    <TorusKnot ref={meshRef} args={[1.3, 0.3, 128, 16]} scale={1.2}>
      {/* meshStandardMaterial is a good default material that reacts to light */}
      <meshStandardMaterial color="#0ea5e9" wireframe={false} roughness={0.5} metalness={0.5} />
    </TorusKnot>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 1, 7], fov: 45 }}> {/* Adjust camera position and field of view */}
      {/* Ambient light provides some base lighting to the scene */}
      <ambientLight intensity={0.6} />
      {/* Directional light simulates light from a specific direction, like the sun */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      {/* Point light emits light from a single point in all directions */}
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff00ff" /> 
      <pointLight position={[0, 5, 0]} intensity={0.7} color="#00ffff" />


      {/* Suspense is needed for components that might load assets asynchronously (like Stars or custom models) */}
      <Suspense fallback={null}> {/* You can put a loader component in fallback */}
        <AnimatedObject />
        {/* Stars adds a nice starfield background */}
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.2} />
      </Suspense>

      {/* OrbitControls allow the user to rotate the camera around the scene */}
      <OrbitControls 
        enableZoom={false} // Disable zooming
        enablePan={false}  // Disable panning
        autoRotate         // Automatically rotate the scene
        autoRotateSpeed={0.6} // Adjust rotation speed
        minPolarAngle={Math.PI / 2.5} // Constrain vertical rotation
        maxPolarAngle={Math.PI / 2.5} // Constrain vertical rotation
      />
    </Canvas>
  );
};

export default HeroCanvas;
