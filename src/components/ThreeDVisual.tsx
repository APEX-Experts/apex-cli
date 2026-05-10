"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { 
  Float, 
  MeshTransmissionMaterial, 
  PerspectiveCamera,
  Text,
  Center,
  OrbitControls
} from "@react-three/drei";
import * as THREE from "three";

const GlassCube = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.5, 3.2, 2.5]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.5}
          thickness={1.5}
          samples={16}
          transmission={1}
          clearcoat={1}
          clearcoatRoughness={0}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          color="#ffffff"
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
        />
      </mesh>
      
      {/* Glowing Inner Core */}
      <mesh>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial 
          color="#d9822f" 
          emissive="#d9822f" 
          emissiveIntensity={10} 
          toneMapped={false} 
        />
      </mesh>

      {/* AE Logo Text in 3D (No external font path to avoid 404) */}
      <Center position={[0, 0, 1.26]}>
        <Text
          fontSize={0.5}
          color="#d9822f"
          anchorX="center"
          anchorY="middle"
        >
          AE
        </Text>
      </Center>
    </Float>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* Primary Amber Glow */}
      <pointLight position={[0, 0, 0]} intensity={20} color="#d9822f" />
      {/* Rim Lighting for Glass edges */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={150} color="#ffffff" castShadow />
      <spotLight position={[-10, -10, 10]} angle={0.15} penumbra={1} intensity={100} color="#d9822f" />
      <directionalLight position={[0, 5, 5]} intensity={2} />
    </>
  );
};

export const ThreeDVisual = () => {
  return (
    <div className="relative w-full h-full min-h-[500px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
        <Suspense fallback={null}>
          <Lights />
          <GlassCube />
          
          {/* Decorative floating bits */}
          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[4, 2, -2]}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#d9822f" emissive="#d9822f" emissiveIntensity={5} />
            </mesh>
          </Float>
          <Float speed={3} rotationIntensity={2} floatIntensity={1}>
            <mesh position={[-3, -2, 1]}>
              <boxGeometry args={[0.15, 0.15, 0.15]} />
              <meshStandardMaterial color="#d9822f" emissive="#d9822f" emissiveIntensity={5} />
            </mesh>
          </Float>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
