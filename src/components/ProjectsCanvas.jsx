// frontend/src/components/ProjectsCanvas.jsx
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

// Component for a single animated shape
const AnimatedShape = ({ position, rotationSpeed, color }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed.x;
      meshRef.current.rotation.y += delta * rotationSpeed.y;
      // Optional: Gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * rotationSpeed.z) * 0.2;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[0.5, 0]} position={position}> {/* args: [radius, detail] */}
      <meshStandardMaterial 
        color={color} 
        roughness={0.6} 
        metalness={0.4} 
        flatShading={true}
      />
    </Icosahedron>
  );
};

const ProjectsCanvas = () => {
  const numShapes = 20; // Number of shapes to render

  // useMemo to create shapes only once
  const shapes = useMemo(() => {
    return Array.from({ length: numShapes }).map((_, i) => {
      const x = (Math.random() - 0.5) * 15; // Random x position
      const y = (Math.random() - 0.5) * 10; // Random y position
      const z = (Math.random() - 0.5) * 10 - 5; // Random z position (further back)
      
      return {
        id: i,
        position: new THREE.Vector3(x, y, z),
        rotationSpeed: { 
          x: (Math.random() - 0.5) * 0.2, 
          y: (Math.random() - 0.5) * 0.2,
          z: (Math.random() - 0.5) * 0.5 + 0.2 // For floating speed
        },
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6), // Random HSL color
      };
    });
  }, [numShapes]);

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5555ff" />

      <Suspense fallback={null}>
        {shapes.map(shape => (
          <AnimatedShape 
            key={shape.id} 
            position={shape.position.toArray()} // Pass position as an array
            rotationSpeed={shape.rotationSpeed}
            color={shape.color}
          />
        ))}
        <Stars radius={80} depth={60} count={5000} factor={5} saturation={0} fade speed={1} />
      </Suspense>
      
      {/* No OrbitControls needed if it's just a passive background */}
    </Canvas>
  );
};

export default ProjectsCanvas;
