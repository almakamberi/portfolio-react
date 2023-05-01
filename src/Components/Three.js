import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function Box(props) {
    const meshRef = useRef();
    useFrame(() => {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    });
    
    return (
      <mesh {...props} ref={meshRef}>
        <boxBufferGeometry args={[3, 3, 3]} /> {/*change the size*/}
        <meshStandardMaterial color="hotpink" /> {/*change the color*/}
      </mesh>
    );
  }

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}