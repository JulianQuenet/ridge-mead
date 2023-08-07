import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import  Scene  from "./scene";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

function App() {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{fov: 60, position:[15, 15, 15]}}>
        <color attach="background" args={["#ececec"]} />
        <Suspense>
          <Physics>
            <Scene />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
