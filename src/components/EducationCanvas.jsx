// frontend/src/components/EducationCanvas.jsx
import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Component for a single animated particle/shape
const FloatingShape = ({ position, scale, color, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed.x;
      meshRef.current.rotation.y += delta * rotationSpeed.y;
      // Gentle upward floating motion, then reset
      meshRef.current.position.y += delta * 0.1; // Adjust speed of floating
      if (meshRef.current.position.y > 7) { // If it floats too high
        meshRef.current.position.y = -7; // Reset to the bottom
        meshRef.current.position.x = (Math.random() - 0.5) * 15; // Reset x to maintain spread
      }
    }
  });

  return (
    <Octahedron ref={meshRef} args={[scale, 0]} position={position}> {/* args: [radius, detail] */}
      <meshStandardMaterial 
        color={color} 
        emissive={color} // Make them glow slightly
        emissiveIntensity={0.3}
        roughness={0.8} 
        metalness={0.2}
        transparent
        opacity={0.7}
      />
    </Octahedron>
  );
};

const EducationCanvas = () => {
  const numShapes = 30; // Number of floating shapes

  const shapes = useMemo(() => {
    return Array.from({ length: numShapes }).map((_, i) => {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 12; // Start at various heights
      const z = (Math.random() - 0.5) * 8 - 4; // Spread them in depth
      
      return {
        id: i,
        position: new THREE.Vector3(x, y, z),
        scale: Math.random() * 0.2 + 0.1, // Random small sizes
        color: new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.7, 0.6), // Cool colors (blues/cyans/greens)
        rotationSpeed: { 
          x: (Math.random() - 0.5) * 0.3, 
          y: (Math.random() - 0.5) * 0.3,
        },
      };
    });
  }, [numShapes]);

  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 10, 10]} intensity={0.5} color="#87CEEB" /> {/* Sky blueish light */}
      <directionalLight position={[-5, 5, 5]} intensity={0.3} />

      <Suspense fallback={null}>
        {shapes.map(shape => (
          <FloatingShape 
            key={shape.id} 
            position={shape.position.toArray()}
            scale={shape.scale}
            color={shape.color}
            rotationSpeed={shape.rotationSpeed}
          />
        ))}
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={0.1} fade speed={0.8} />
      </Suspense>
    </Canvas>
  );
};

export default EducationCanvas;
