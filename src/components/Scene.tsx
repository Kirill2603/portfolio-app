import React, { Suspense } from 'react'
import { Note } from './Note'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const Scene = () => {

  return (
    <Canvas
      shadows
      style={{ width: '100%', height: '40vh' }}
      camera={{ position: [-10, 5, 12], fov: 40 }}>
      <ambientLight intensity={.8} />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback='Loading...'>
        <Note />
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
    </Canvas>
  )
}