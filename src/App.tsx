import React from 'react';
import {Scene} from "./components/scene";
import {Canvas} from "@react-three/fiber";



function App() {



    return (
        <div style={{height: '50vh'}}>
            <Canvas  shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
                <fog attach="fog" args={["white", 0, 40]} />
                <ambientLight intensity={0.4} />
                <directionalLight
                    castShadow
                    position={[2.5, 8, 5]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />
                <Scene position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}

export default App;
