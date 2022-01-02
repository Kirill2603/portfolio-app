import React from 'react';
import {Scene} from "./components/scene";
import {Canvas} from "@react-three/fiber";



function App() {



    return (
        <div >
            <Canvas  shadows
                     style={{width: "100%", height: "300px"}}
                     camera={{ position: [-5, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.4} />
                <directionalLight
                    castShadow
                    position={[2.5, 8, 5]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <Scene position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}

export default App;
