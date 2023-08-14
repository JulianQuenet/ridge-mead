import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";



function App() {
  return (
    <Canvas
      shadows
      camera={{ fov: 50, position:[5,3,2] }}
    >
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <color attach="background" args={["lightblue"]} />
      <Physics>
        <Controls />
        <Scene/>
      </Physics>
    </Canvas>
  );
}

export default App;