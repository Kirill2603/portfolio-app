import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'


export function Note() {
  const { nodes, materials } = useGLTF('portfolio-app/newNoteModel.gltf') as any
  const mesh = useRef<Mesh>(null!)

  useFrame(() => {
      mesh.current.rotation.y += 0.005
    },
  )
  return (
    <group ref={mesh} position={[0, -4, 0]}>
      <mesh
        geometry={nodes.newNoteModel001.geometry}
        material={materials.keyboard}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.logo192.geometry}
        material={materials.logo192}
        position={[0, 4.02, -4.17]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.99, 1, 1.99]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.newNoteModel_1.geometry}
          material={materials.base}
        />
        <mesh
          geometry={nodes.newNoteModel_2.geometry}
          material={materials.touch}
        />
        <mesh
          geometry={nodes.newNoteModel_3.geometry}
          material={materials.screen}
        />
        <lineSegments
          geometry={nodes.newNoteModel_4.geometry}
          material={materials.base}
        />
      </group>
    </group>
  )
}

useGLTF.preload('portfolio-app/newNoteModel.gltf')
