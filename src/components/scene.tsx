import {Model} from "./model";
import {Canvas} from "@react-three/fiber";
import React from "react";

export const Scene = () => {
  return (
      <Canvas
          shadows
          style={{width: "100%", height: "35vh"}}
          camera={{ position: [-10, 5, 12], fov: 40 }}>
          <Model position={[-0, 0, 0]} />
      </Canvas>
  )
}