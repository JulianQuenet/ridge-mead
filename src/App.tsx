import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";
import { Stars } from "@react-three/drei";


function App() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 50, position:[5,3,2] }}
    >
      {/* <ambientLight intensity={1}/> */}
      <directionalLight
        position={[-5, 25, 5]}
        
        castShadow
        shadow-mapSize={5024}
      />
      <color attach="background" args={["lightblue"]} />
      <Physics>
        <Controls />
        <Scene/>
      </Physics>
      <Stars />
    </Canvas>
  );
}

export default App;