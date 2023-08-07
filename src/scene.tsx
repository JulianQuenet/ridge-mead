import {
  Box,
  PerspectiveCamera
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";


const Scene = () => {

  return (
    <>
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />

      <RigidBody type="dynamic">
        <Box castShadow position={[0, 5, 0]}>
          <meshStandardMaterial color="darkslategrey" />
        </Box>
      </RigidBody>

      <RigidBody type="fixed" name="floor" friction={0.75}>
        <Box position={[0, 0, 0]} args={[100, 1, 100]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>
    </>
  );
};

export default Scene;
