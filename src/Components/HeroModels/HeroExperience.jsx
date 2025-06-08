import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Robo2 } from "./Robo2";
import Particles from "./Particles";
import { Suspense } from "react";
import { Robo1 } from "./Robo1";
import HeroLights from "./HeroLights";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[-5, -5, -5]} intensity={5} />
      <OrbitControls
        enableZoom={!isMobile}
        maxDistance={40}
        minDistance={25}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        {/* <group
          scale={isMobile ? 0.7 : 1.2}
          position={[-4, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Robo2 />
        </group> */}
        <group
          scale={isMobile ? 13 : 12}
          position={isMobile?[0, -2.8, 0]:[0, -1, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Robo1 />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
