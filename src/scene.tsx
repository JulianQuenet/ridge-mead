import {
  Box,
} from "@react-three/drei";

import { RigidBody } from "@react-three/rapier";
import Maze from "./components/Maze";
import n from "./assets/textures/wall-normal.jpg"
import r from "./assets/textures/wall-rough.jpg"
import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";
import { useEffect } from "react";

const Scene = () => {

  const [normal, rough] = useLoader(TextureLoader, [
    n,
    r
  ])

  useEffect(() => {
    [normal, rough].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });
  }, [normal, rough]);


  return (
    <>
      <RigidBody type="fixed" name="floor" friction={0.5}>
        <Box position={[0, 0, 0]} args={[250, 1, 250]} receiveShadow>
          <meshStandardMaterial color="white" />
        </Box>
      </RigidBody>
      
    
      <Box name="moon">
      <meshStandardMaterial color="white" normalMap={normal} roughnessMap={rough}/>
      </Box>
      

      <RigidBody type="fixed" position={[5,1,0]} colliders={"trimesh"}> 
        <Maze />
      </RigidBody>
      
    </>
  );
};

export default Scene;
