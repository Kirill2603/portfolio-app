import {Canvas, useFrame} from "@react-three/fiber";
import React, {useRef, Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import { Mesh} from "three";
import { useGLTF } from '@react-three/drei'

export function PC({ ...props }) {
    const group = useRef()
    const { nodes, materials }: any = useGLTF('/notebook3dnew.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <group
                scale={[0.5,0.5,0.5]}
                position={[0,-3,0]}
                rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.notebook3d001.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.notebook3d001_1.geometry} material={materials['Material.005']} />
                <mesh geometry={nodes.notebook3d001_2.geometry} material={materials.Material} />
            </group>
        </group>
    )
}

export function Model(props: JSX.IntrinsicElements['mesh']) {

    const mesh = useRef<Mesh>(null!)

    useFrame(() =>
        {
            mesh.current.rotation.y += 0.005
        }
    )


    return (

        <mesh
            position={[0, 0, 0]}
            ref={mesh}
        >
            <ambientLight intensity={0.4} />
            <directionalLight
                castShadow
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
                <PC/>
            </Suspense>

            <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />

        </mesh>



    )
}


