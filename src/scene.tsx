<<<<<<< HEAD
import {
  Box,
} from "@react-three/drei";
=======
import { Canvas } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics, usePlane } from '@react-three/cannon';
>>>>>>> db99f5d9e8511e7c2f55462a193850d8bf173388

const Floor = (props:any) => {
  const [ref]:any = usePlane((index) => ({ type: 'Static', mass: 0, ...props }));

  return (
    <mesh receiveShadow rotation={props.rotation} ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};


const Lights = () => {
  return (
    <>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2024}
      />
<<<<<<< HEAD

      <RigidBody type="dynamic">
        <Box castShadow position={[0, 5, 0]}>
          <meshStandardMaterial color="darkslategrey" />
        </Box>
      </RigidBody>

      <RigidBody type="fixed" name="floor" friction={0.5}>
        <Box position={[0, 0, 0]} args={[250, 1, 250]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>
=======
>>>>>>> db99f5d9e8511e7c2f55462a193850d8bf173388
    </>
  );
};



const Scene = ({ children }:any) => {
  return (
    <div>
      <Canvas shadows camera={{ fov: 50, position:[0,3,2] }}>
      <color attach="background" args={["lightblue"]} />
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor receiveShadow rotation={[Math.PI / -2, 0, 0]} color="grey" />
        </Physics>

        <PointerLockControls />
      </Canvas>
    </div>
  );
};

export default Scene;
