
import { RigidBody } from "@react-three/rapier";
import { Model } from "./components/BackRooms";
import { Nurse } from "./components/Nurse";
import { NurseHead } from "./components/NurseHead";

const Scene = () => {


  return (
    <>
      <RigidBody type="fixed" position={[5,0.2,0]} colliders="trimesh">
        <Model />
      </RigidBody>

      <RigidBody lockTranslations colliders="trimesh"> 
        <Nurse />  
      </RigidBody>

      <NurseHead />
      
    </>
  );
};

export default Scene;
