import React from "react";
import { useGLTF } from "@react-three/drei";

export function Robo2(props) {
  const { nodes, materials } = useGLTF("/models/robo2.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.CHARACTER__0.geometry}
          material={materials["Scene_-_Root"]}
          position={[0, 265.595, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/robo2.glb");
