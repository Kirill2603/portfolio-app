import {Model} from "./model";
import {Canvas} from "@react-three/fiber";
import React from "react";

export const Scene = () => {
  return (
      <Canvas  shadows
               style={{width: "100%", height: "300px"}}
               camera={{ position: [-5, 0, 10], fov: 60 }}>
          <Model position={[0, 0, 0]} />
      </Canvas>
  )
}