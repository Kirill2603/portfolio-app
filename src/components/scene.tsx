import {Canvas, useFrame} from "@react-three/fiber";
import React, {useRef, useState} from "react";
import * as THREE from 'three'
import {OrbitControls, Plane} from "@react-three/drei";

import pc from '../assets/pc.obj'

export function Scene(props: JSX.IntrinsicElements['mesh']) {

    const mesh = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => (mesh.current.rotation.y += 0.005))

    return (
        <mesh
            {...props}
            ref={mesh}
        >
            <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshStandardMaterial attach="material" color="lightblue" roughness={0} metalness={0.1} />

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Plane args={[2, 2]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <meshBasicMaterial attach="material" color="white" />
            </Plane>
        </mesh>
    )
}


