import {
  Box,
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";
import { useEffect } from "react";
import { Model } from "./components/BackRooms";

const Scene = () => {


  return (
    <>
      <RigidBody type="fixed" name="floor" friction={0.5}>
        <Box position={[0, 0, 0]} args={[250, 1, 250]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>
      

      <RigidBody  position={[5,0.65,0]}  colliders="trimesh">
        <Model />
      </RigidBody>
        
    </>
  );
};

export default Scene;
