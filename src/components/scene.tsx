import {useFrame} from "@react-three/fiber";
import React, {useRef, useState, Suspense} from "react";
import {OrbitControls, Plane, Shadow} from "@react-three/drei";
import {Mesh} from "three";

import { useGLTF } from '@react-three/drei'

export function PC({ ...props }) {
    const group = useRef()
    const { nodes, materials }: any = useGLTF('/pc.gltf')
    return (
        <group ref={group} {...props} dispose={null} position={[0,-0.5,0]} >
            <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={0}/>
            <mesh geometry={nodes.pc.geometry} material={materials.palette} scale={0.5} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

export function Scene(props: JSX.IntrinsicElements['mesh']) {

    const mesh = useRef<Mesh>(null!)
    const shadow = React.useRef<Mesh>(null!)

    useFrame((state, delta) =>
        {
            shadow.current.scale.x = 6
            shadow.current.scale.y = 6
            mesh.current.rotation.y += 0.005
        }
    )

    return (
        <mesh
            {...props}
            ref={mesh}
        >
            <Suspense fallback={null}>
                <PC/>
            </Suspense>

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Shadow ref={shadow} scale={[2, 2, 2]} position-y={-0.51} rotation-x={-Math.PI / 2} />

        </mesh>
    )
}


