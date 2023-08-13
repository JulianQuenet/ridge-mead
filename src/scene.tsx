import {
  Box,
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";


const Scene = () => {

  return (
    <>

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
    </>
  );
};

export default Scene;
