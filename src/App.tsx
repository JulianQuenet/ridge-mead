import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";
import { Stars } from "@react-three/drei";


function App() {
  return (
    <Canvas
      shadows
      camera={{ fov: 50, position:[5,3,2] }}
    >
      {/* <ambientLight intensity={1}/> */}
      <directionalLight
        position={[-5, 25, 5]}
        intensity={0.12}
        castShadow
        shadow-mapSize={5024}
      />
      <color attach="background" args={["black"]} />
      <Physics>
        <Controls />
        <Scene/>
      </Physics>
      <Stars />
    </Canvas>
  );
}

export default App;