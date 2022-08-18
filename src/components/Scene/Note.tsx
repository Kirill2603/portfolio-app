import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    newNoteModel001: THREE.Mesh;
    logo192: THREE.Mesh;
    newNoteModel_1: THREE.Mesh;
    newNoteModel_2: THREE.Mesh;
    newNoteModel_3: THREE.Mesh;
    newNoteModel_4: THREE.Mesh;
  };
  materials: {
    keyboard: THREE.MeshStandardMaterial;
    logo192: THREE.MeshStandardMaterial;
    base: THREE.MeshStandardMaterial;
    touch: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
  };
};

export function Note() {
  const { nodes, materials } = useGLTF('/portfolio-app/newNoteModel.gltf') as GLTFResult

  const mesh = useRef<Group>(null)

  useFrame(() => {
      if (mesh.current) {
        mesh.current.rotation.y += 0.005
      }
    },
  )

  return (
    <group ref={mesh} position={[0, -4, 0]} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.newNoteModel001.geometry}
        material={materials.keyboard}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.logo192.geometry}
        material={materials.logo192}
        position={[0, 4.02, -4.17]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.99, 1, 1.99]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.newNoteModel_1.geometry}
          material={materials.base}
        />
        <mesh
          castShadow={true}
          receiveShadow={true}
          geometry={nodes.newNoteModel_2.geometry}
          material={materials.touch}
        />
        <mesh
          castShadow={true}
          receiveShadow={true}
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

useGLTF.preload('/portfolio-app/newNoteModel.gltf')
