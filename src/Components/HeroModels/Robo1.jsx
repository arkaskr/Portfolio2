
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Robo1(props) {
  const { nodes, materials } = useGLTF('/models/robo1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['tripo_material_5f5557ff-661d-4f08-8a8c-40e0f38ea46f']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['tripo_material_5f5557ff-661d-4f08-8a8c-40e0f38ea46f']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['tripo_material_5f5557ff-661d-4f08-8a8c-40e0f38ea46f']} />
      <mesh geometry={nodes.Object_7.geometry} material={materials['tripo_material_5f5557ff-661d-4f08-8a8c-40e0f38ea46f']} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['tripo_material_5f5557ff-661d-4f08-8a8c-40e0f38ea46f']} />
    </group>
  )
}

useGLTF.preload('/models/robo1.glb')
