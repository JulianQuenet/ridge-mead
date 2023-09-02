import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";
import { Loader, Stars } from "@react-three/drei";


function App() {
  return (
    <>
    <Canvas
      shadows
      camera={{ fov: 50, position:[5,3,2] }}
    >
      {/* <ambientLight intensity={1}/> */}
      <directionalLight
        position={[-5, 25, -50]}
        intensity={0.05}
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
    <Loader />
    </>
  );
}

export default App;