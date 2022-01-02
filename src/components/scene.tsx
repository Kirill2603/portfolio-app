import {Canvas, useFrame} from "@react-three/fiber";
import React, {useRef, Suspense} from "react";
import {OrbitControls} from "@react-three/drei";
import { Mesh} from "three";
import { useGLTF } from '@react-three/drei'

export function PC({ ...props }) {
    const group = useRef()
    const {nodes, materials}: any = useGLTF('/notebook3d.gltf')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.notebook3d.geometry}
                  scale={[0.5,0.5,0.5]}
                  position={[0,-3,0]}
                  material={materials['palette.001']}
                  rotation={[Math.PI / 2, 0, 0]}/>
        </group>
    )
}

export function Scene(props: JSX.IntrinsicElements['mesh']) {

    const mesh = useRef<Mesh>(null!)

    useFrame(() =>
        {
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

            <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />

        </mesh>



    )
}


