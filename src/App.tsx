
<<<<<<< HEAD
import { Canvas } from "@react-three/fiber";
import { Physics} from "@react-three/rapier";
import Controls from "./Controls";
import Scene from "./scene";
=======
import { Sky, Stars } from '@react-three/drei';
import { useBox } from '@react-three/cannon';
import Scene from './scene';
>>>>>>> db99f5d9e8511e7c2f55462a193850d8bf173388

import BaseCharacter from './player';

const BaseBox = ({ ...props }) => {
  const [ref]:any = useBox((index) => ({
    type: 'Static',
    mass: 1,
    ...props,
  }));

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};


function App() {
  return (
<<<<<<< HEAD
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
      <Physics debug>
        <Controls />
        <Scene/>
      </Physics>
    </Canvas>
=======
    <Scene>
      <BaseBox text={false} position={[0, 0.5, 0]} args={[2, 1, 2]} color="red" />
      <BaseBox text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
      <BaseBox text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />
      <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
      <Stars/>
    </Scene>
>>>>>>> db99f5d9e8511e7c2f55462a193850d8bf173388
  );
}

export default App;