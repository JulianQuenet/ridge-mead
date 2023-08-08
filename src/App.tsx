
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";


function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 3, 3], fov: 60 }}
    >
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <color attach="background" args={["lightblue"]} />
      <Physics debug>
        <Controls />
        <Scene/>
      </Physics>
    </Canvas>
  );
}

export default App;