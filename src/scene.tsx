import {
  Box,
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";
import { useEffect } from "react";
import { Model } from "./components/HouseRef";

const Scene = () => {


  return (
    <>
      <RigidBody type="fixed" name="floor" friction={0.5}>
        <Box position={[0, 0, 0]} args={[250, 1, 250]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>

      <mesh  position={[5,1,0]} > 
        <Model />
      </mesh>
      
    </>
  );
};

export default Scene;
