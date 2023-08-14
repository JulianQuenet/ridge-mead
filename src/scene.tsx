import {
  Box,
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";
import Maze from "./components/Maze";


const Scene = () => {

  return (
    <>
      <RigidBody type="fixed" name="floor" friction={0.5}>
        <Box position={[0, 0, 0]} args={[250, 1, 250]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>

      <RigidBody type="fixed" position={[5,1,0]} colliders={"trimesh"}> 
        <Maze />
      </RigidBody>
      
    </>
  );
};

export default Scene;
