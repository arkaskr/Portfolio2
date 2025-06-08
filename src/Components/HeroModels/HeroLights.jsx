import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Key light from front-right */}
    <spotLight
      position={[10, 8, 10]}
      angle={0.3}
      penumbra={0.5}
      intensity={1000}
      color="#ffffff"
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />

    {/* Fill light from left */}
    <spotLight
      position={[-10, 6, 8]}
      angle={0.4}
      penumbra={0.6}
      intensity={400}
      color="#4cc9f0"
    />

    {/* Rim/back light for edge glow */}
    <spotLight
      position={[0, 6, -10]}
      angle={0.5}
      penumbra={0.7}
      intensity={500}
      color="#9d4edd"
    />

    {/* Ground bounce/reflected light */}
    <pointLight
      position={[0, -3, 0]}
      intensity={100}
      color="#33C3FF"
    />

    {/* Area light for moody fill */}
    <primitive
      object={new THREE.RectAreaLight(0xffffff, 5, 4, 2)}
      position={[1, 3, 5]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={10}
    />

    {/* Ambient for soft base light */}
    <ambientLight intensity={0.1} color="#ffffff" />
  </>
);

export default HeroLights;
