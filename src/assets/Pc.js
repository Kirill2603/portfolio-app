/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pc.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <mesh geometry={nodes.pc.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/pc.gltf')